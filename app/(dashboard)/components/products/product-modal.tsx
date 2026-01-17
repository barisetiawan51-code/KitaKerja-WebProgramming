import { useState } from "react";
import ImageUploadPreview from "../ui/image-upload-preview";
import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-7 [&_label]:font-medium">
        <div className="flex gap-7">
          <div className="input-group-admin min-w-50">
            <ImageUploadPreview
              label="Product Image"
              value={imagePreview}
              onChange={(file) => {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }}
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="e. g. Running Shoes"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input type="number" id="price" name="price" placeholder="0" />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" placeholder="0" />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="" disabled>
                  Select Category
                </option>
                <option value="running">Running</option>
                <option value="football">Football</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={7}
            placeholder="Product Details..."
          ></textarea>
        </div>
        <Button className="ml-auto mt-3 rounded-lg">Create Product</Button>
      </div>
    </Modal>
  );
};

export default ProductModal;
