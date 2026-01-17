import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import PriceFormmatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TCategoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TCategoryModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex gap-7">
        <div>
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <Image
            src="/images/payment-proof-dummy.png"
            alt="payment proof"
            width={200}
            height={401}
          />
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col p-4 gap-2.5 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right font-medium">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right font-medium">Imam Bari Setiawan</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right font-medium">085462732532</div>
            </div>
            <div className="flex justify-between gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">
                Shipping Address
              </div>
              <div className="text-right">
                Merdeka Street, Jakarta, Indonesia, 332122
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
            <div className="bg-gray-100 rounded aspect-square w-8 h-8 flex items-center justify-center">
              <Image
                src="/images/products/product-3.svg"
                alt="product image"
                width={30}
                height={30}
              />
            </div>
            <div className="font-medium text-sm">SportsOn Hyperfast Shoes</div>
            <div className="font-medium ml-auto text-sm">3 units</div>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <h4 className="font-semibold">Total</h4>
            <div className="text-primary font-semibold">
              {PriceFormmatter(450000)}
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-10">
            <Button
              className="text-[#E33D3D]! bg-[#FF5F3F33]! rounded-md"
              size="small"
            >
              <FiX size={21} />
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md"
              size="small"
            >
              <FiCheck size={21} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;
