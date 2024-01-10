"use client";

import { DonatedItem } from "@/types";
import React, { useEffect, useState } from "react";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<DonatedItem[]>([]);

  const handleRemoveFromCart = async (food: DonatedItem) => {
    await fetch("/api/cart/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });

    await fetchCartItems();
  };

  async function fetchCartItems() {
    const res = await fetch("/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const cartItemsData = await res.json();
    console.log(cartItemsData);
    setCartItems(cartItemsData);
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleBuy = () => {
    setCartItems([]);
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">Item List</h1>

      {cartItems.length > 0 ? (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Selected Foods</h2>
          <ul className="list-disc ml-6">
            {cartItems.map((food) => (
              <li
                key={`${food.foodName}-${food.amount}`}
                className="flex justify-between items-center"
              >
                <span>{`${food.foodName} (${food.amount})`}</span>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleRemoveFromCart(food)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleBuy}
          >
            Order
          </button>
        </div>
      ) : (
        <p className="text-center text-lg">List is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
