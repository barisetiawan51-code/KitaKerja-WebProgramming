"use client";

import { useState } from "react";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      toast.warn("Please fill in all fields");
      return;
    }
    setCustomerInfo(formData);
    toast.success("Information saved! Redirecting to Payment...");

    setTimeout(() => {
      push("/payment");
    }, 1500);
  };

  return (
    <main className="bg-gray-100  min-h-[80vh] pt-15">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
        </div>
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
    </main>
  );
};

export default Checkout;
