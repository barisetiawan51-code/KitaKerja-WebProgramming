"use client";

import CardWithHeader from "../ui/card-with-header";
import FileUpload from "../ui/file-upload";
import PriceFormmatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";
import { toast, ToastContainer } from "react-toastify";

const PaymentSteps = () => {
  const { push } = useRouter();
  const { items, customerInfo, reset } = useCartStore();
  const [file, setFile] = useState<File | null>();
  const [isSubmmitting, setIsSubmitting] = useState(false);

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const uploadAndConfirmed = () => {
    push("/order-status/32123132");
  };

  const handleConfirmPayment = async () => {
    if (!file) {
      toast.warn("Please upload your payment receipt!");
      return;
    }

    if (!customerInfo) {
      toast.error("Customer information is missing, please return to checkout");
      setTimeout(() => push("/checkout"), 2000);
      return;
    }

    const toastId = toast.loading("Currently processing payment...");

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("customerName", customerInfo.customerName);
      formData.append(
        "customerContact",
        customerInfo.customerContact!.toString()
      );
      formData.append("customerAddress", customerInfo.customerAddress);
      formData.append("image", file);
      formData.append(
        "purchasedItems",
        JSON.stringify(
          items.map((item) => ({ productId: item._id, qty: item.qty }))
        )
      );
      formData.append("totalPayment", totalPrice!.toString());

      const res = await transactionCheckout(formData);

      toast.update(toastId, {
        render: "Transaction created succesfuly",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
      reset();
      setTimeout(() => {
        push(`/order-status/${res._id}`);
      }, 2000);

      console.log("Transaction Response", res);
    } catch (error: any) {
      toast.update(toastId, {
        render: error.message || "There is an error",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <CardWithHeader title="Payment Steps">
      <div className="p-5">
        <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-5">
          <li>
            Transfer the total amount of <b>Rp. 1.035.000</b> to your preferred
            bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
          </li>
          <li>
            After completing the transfer, <b>keep the payment receipt</b> or a
            screenshot of the transfer confirmation. This will be needed for the
            next step.
          </li>
          <li>
            Upload the payment receipt/screenshot using the '
            <b>Upload Receipt & Confirm</b>' button below to validate your
            transaction.
          </li>
        </ol>
        <FileUpload onFileSelect={setFile} />
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">{PriceFormmatter(45000)}</div>
        </div>
        <Button
          variant="dark"
          size="normal"
          className="w-full mt-4"
          onClick={handleConfirmPayment}
          disabled={isSubmmitting}
        >
          <FiCheckCircle />
          {isSubmmitting ? "Processing..." : "Upload Receipt & Confirm"}
        </Button>
      </div>
      <ToastContainer
        position="top-center"
        theme="light"
        toastClassName={() =>
          "relative flex p-8 min-h-10 rounded-xl overflow-hidden cursor-pointer bg-white text-slate-800 shadow-xl border border-slate-100"
        }
        hideProgressBar={true}
        autoClose={1500}
      />
    </CardWithHeader>
  );
};

export default PaymentSteps;
