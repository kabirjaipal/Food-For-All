import React, { useState, useEffect } from "react";
import { generateUniqueId } from "@/lib/utils";

type DonateModalProps = {
  onClose: () => void;
  onDonate: (item: DonatedItem) => void;
  editedItem?: DonatedItem;
};

type DonatedItem = {
  foodName: string;
  itemId: string;
  rawOrCooked: string;
  location: string;
  amount: string;
  manufactureTime: string;
  expiry: string;
  inCart: boolean;
  [key: string]: any;
};

const formFields = [
  { name: "foodName", label: "Food Name", type: "text" },
  {
    name: "rawOrCooked",
    label: "Raw or Cooked",
    type: "select",
    options: ["Raw", "Cooked"],
  },
  { name: "location", label: "Location", type: "text" },
  { name: "amount", label: "Amount", type: "number" },
  {
    name: "manufactureTime",
    label: "Manufacture/Cook Time",
    type: "datetime-local",
  },
  { name: "expiry", label: "Estimated Expiry", type: "datetime-local" },
];

const DonateModal: React.FC<DonateModalProps> = ({
  onClose,
  onDonate,
  editedItem,
}) => {
  const [formData, setFormData] = useState<DonatedItem>({
    foodName: "",
    itemId: generateUniqueId(),
    rawOrCooked: "raw",
    location: "",
    amount: "",
    manufactureTime: "",
    expiry: "",
    inCart: false,
  });

  useEffect(() => {
    if (editedItem) {
      setFormData(editedItem);
    }
  }, [editedItem]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: DonatedItem = formData;
    onDonate(newItem);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white rounded-md shadow-xl">
        <h3 className="text-lg font-medium text-gray-900 text-center mb-4">
          Donate Food Item
        </h3>
        <form className="space-y-2" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700">{field.label}</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-1"
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-1 border"
                  required
                />
              )}
            </div>
          ))}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Donate
            </button>
            <button
              type="button"
              className="flex-1 px-4 py-2 text-gray-500 rounded-md hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;
