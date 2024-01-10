"use client";

import { HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { UserType } from "@/types";

type DonatorCardProps = {
  user: UserType;
};

const DonatorCard: React.FC<DonatorCardProps> = ({ user }) => {
  const router = useRouter();
  return (
    <a
      href={`/user/${user.id}`}
      // onClick={() => {
      //   router.push(`/user/${user.id}`);
      // }}
      className={`bg-white p-4 rounded-md shadow-md transition transform hover:scale-105 relative cursor-pointer`}
    >
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <h3 className="text-lg font-semibold">{user.name}</h3>
      </div>
      <div className="absolute top-8 right-2">
        <HiOutlineArrowRight className="text-gray-600 hover:text-gray-800" />
      </div>
    </a>
  );
};

export default DonatorCard;
