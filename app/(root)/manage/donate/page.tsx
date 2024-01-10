"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import DonateModal from "./DonateModal";
import { HiPlusCircle, HiPencilAlt, HiTrash } from "react-icons/hi";
import { DonatedItem, DonatedItems } from "@/types";

import { formatDistanceToNow } from "date-fns";

function formatDateTimeAgo(dateTimeString: any) {
  const formattedDate = formatDistanceToNow(new Date(dateTimeString), {
    addSuffix: true,
  });
  return formattedDate;
}

export type DonateModalProps = {
  onClose: () => void;
  onDonate: (item: DonatedItem) => void;
};

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [donatedItems, setDonatedItems] = useState<DonatedItems>([]);

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = async (index: number) => {
    const updatedItems = donatedItems.filter((_, i) => i !== index);
    setDonatedItems(updatedItems);

    await fetch("/api/item", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItems),
    });
  };

  useEffect(() => {
    // Debounce the API call to save donated items

    (async () => {
      await fetch("/api/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donatedItems),
      });
    })();
  }, [donatedItems]);

  useEffect(() => {
    // Debounce the API call to get food items from the database
    (async () => {
      const res = await fetch("/api/item", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      setDonatedItems((prev) => [...prev, ...json]);
    })();
  }, []);

  const handleDonate = (item: DonatedItem) => {
    if (editingIndex !== null) {
      const updatedItems = [...donatedItems];
      updatedItems[editingIndex] = item;
      setDonatedItems(updatedItems);
      setEditingIndex(null);
    } else {
      setDonatedItems([...donatedItems, item]);
    }
    setShowModal(false);
  };
  return (
    <div className="min-h-screen">
      <Head>
        <title>Food Donation</title>
        <meta
          name="description"
          content="Donate your extra food to those in need."
        />
      </Head>

      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Food Donation
        </h1>
        <button
          className="flex justify-center m-auto items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => {
            setEditingIndex(null);
            setShowModal(true);
          }}
        >
          <HiPlusCircle className="mr-2" />
          Donate Food
        </button>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {donatedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md border border-gray-300 transition transform hover:shadow-lg cursor-pointer relative"
            >
              <h3 className="text-lg font-semibold mb-2 capitalize">
                {item.foodName}
              </h3>
              <p className="text-gray-600">Raw/Cooked: {item.rawOrCooked}</p>
              <p className="text-gray-600">Location: {item.location}</p>
              <p className="text-gray-600">Amount: {item.amount}</p>
              <p className="text-gray-600">
                MFD/Cooked Time: {formatDateTimeAgo(item.manufactureTime)}
              </p>
              <p className="text-gray-600">
                Estimated Expiry: {formatDateTimeAgo(item.expiry)}
              </p>
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  <HiPencilAlt className="text-xl" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 text-red-600 hover:text-red-800"
                >
                  <HiTrash className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <DonateModal
          onClose={() => {
            setEditingIndex(null);
            setShowModal(false);
          }}
          onDonate={handleDonate}
          editedItem={
            editingIndex !== null ? donatedItems[editingIndex] : undefined
          }
        />
      )}
    </div>
  );
};

export default Page;
