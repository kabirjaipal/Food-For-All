import { FoodCardProps } from "@/types";
import React from "react";
import { HiCheck, HiOutlineMinusCircle } from "react-icons/hi";
import { formatDistanceToNow } from "date-fns";

function formatDateTimeAgo(dateTimeString: any) {
  const formattedDate = formatDistanceToNow(new Date(dateTimeString), {
    addSuffix: true,
  });
  return formattedDate;
}

const FoodCard: React.FC<FoodCardProps> = ({
  food,
  isAddedToCart,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-300 hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2 capitalize">{food.foodName}</h3>
      <p className="text-gray-600">Raw/Cooked: {food.rawOrCooked}</p>
      <p className="text-gray-600">Location: {food.location}</p>
      <p className="text-gray-600">Amount: {food.amount} kg</p>
      <p className="text-gray-600">
        MFD/Cooked Time: {formatDateTimeAgo(food.manufactureTime)}
      </p>
      <p className="text-gray-600">
        Estimated Expiry: {formatDateTimeAgo(food.expiry)}
      </p>
      <div className="mt-4 flex items-center">
        {isAddedToCart ? (
          <button
            className="px-2 py-1 text-red-600 hover:text-red-800 flex items-center"
            onClick={onRemoveFromCart}
          >
            <HiOutlineMinusCircle className="mr-1 text-xl" /> Remove
          </button>
        ) : (
          <button
            className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
            onClick={onAddToCart}
          >
            <HiCheck className="mr-1 text-xl" /> Add to Item List
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
