import React from "react";
import Image from "next/image";
import { Profile } from "@/lib/types";

interface ProfileCardProps {
  item: Profile;
  handleSelectProfile: (id: number) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  item,
  handleSelectProfile,
}) => {
  const handleSendProfile = () => {
    handleSelectProfile(item.id);
  };
  return (
    <div
      className="flex justify-around mt-2 cursor-pointer hover:bg-gray-100"
      onClick={handleSendProfile}>
      <div className="flex">
        <Image
          src={item.image}
          alt="alt"
          width={30}
          height={30}
          className="mr-2 rounded-lg"
        />
        <div className="flex flex-col">
          <h3 className="font-[500] text-[14px]">{item.name}</h3>
          <p className="text-[12px] text-gray-500">{item.email}</p>
        </div>
      </div>
      <div className="flex justify-end text-right w-full">
        <h2
          className={`${
            item.percentage > 60 ? "text-green-500" : "text-yellow-500"
          } font-semibold`}>
          {item.percentage}%
        </h2>
      </div>
    </div>
  );
};

export default ProfileCard;
