import { profiles } from "@/lib/data";
import { HiPencil } from "react-icons/hi2";
import ProfileCard from "./ProfileCard";
import { Profile } from "@/lib/types";
import { useEffect, useState } from "react";
import { VscOpenPreview } from "react-icons/vsc";
import { SiTicktick } from "react-icons/si";

interface ProfilesProps {
  profile: Profile[] | null;
  handleSelectProfile: (id: number) => void;
}
const Profiles: React.FC<ProfilesProps> = ({
  handleSelectProfile,
  profile,
}) => {
  const [updatedProfile, setUpdatedProfile] = useState<Profile[] | null>(null);
  useEffect(() => {
    if (profile !== null) {
      setUpdatedProfile(profile);
    }
  }, [profile]);
  const handleShortList = () => {
    const localStorageData = localStorage.getItem("profiles");
    if (localStorageData) {
      const parsedData: Profile[] = JSON.parse(localStorageData);
      if (parsedData.length > 0) {
        setUpdatedProfile(parsedData);
      }
    }
  };
  const handleHideShortList = () => {
    if (profile !== null) {
      setUpdatedProfile(profile);
    }
  };

  return (
    <div className="w-1/2 bg-gray-100 p-4">
      <div className="my-4">
        <span className="text-gray-500">
          Pages <span className="text-black">/Assignment</span>
        </span>
        <h3 className="font-semibold my-2">Sales BDE</h3>
      </div>

      <div className="bg-white flex flex-col p-4 rounded-lg">
        <div className="flex justify-between">
          <div className="w-1/2">
            <h2 className="font-semibold text-lg my-4">Sales BDE</h2>
            <p className="text-sm my-3 text-gray-400  font-medium">
              Assignment Link
            </p>
            <p className="text-sm my-3 text-gray-400  font-medium">
              Assignment Hour{" "}
            </p>
            <p className="text-sm my-3 text-gray-400 font-medium">
              Assignment Ends at{" "}
            </p>
          </div>
          <div className="w-1/2 ">
            <div className="flex justify-end  text-md font-semibold my-4">
              <h2
                className="mx-2 font-bold"
                style={{
                  color: "rgb(10, 172, 104)",
                  fontSize: "16px",
                  fontWeight: "500",
                }}>
                Active
              </h2>

              <HiPencil className="bg-white rounded-lg shadow-md p-1 w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col justify-end text-right">
              <a href="#" className="text-blue-700 underline">
                www.google.com
              </a>{" "}
              <p className="my-2 text-sm font-medium text-gray-400">3 hours</p>
              <p className="my-2 text-sm font-medium text-gray-400">
                11 March 2024
              </p>
            </div>
          </div>
        </div>
        <div className="my-8 flex items-center justify-between">
          <button
            onClick={handleHideShortList}
            className="mr-4 shadow-md p-2 px-4 rounded-lg font-semibold text-[11px] flex items-center">
            <VscOpenPreview className="mr-1" />
            TO REVIEW
          </button>
          <button
            onClick={handleShortList}
            className="shadow-md p-2 px-4 rounded-lg font-semibold text-[11px] flex items-center">
            <SiTicktick className="mr-1" />
            SHORTLISTED
          </button>
        </div>
        <div className="flex justify-between my-4">
          <h3 className=" text-gray-500 text-[12px] font-[500]">CANDIDATE</h3>
          <h3 className="text-gray-500 text-[12px] font-[500]">SCORE</h3>
        </div>
        <div className="flex flex-col ">
          <div className="flex  flex-col justify-center">
            {updatedProfile !== null &&
              updatedProfile.map((item) => (
                <ProfileCard
                  key={item.id}
                  item={item}
                  handleSelectProfile={handleSelectProfile}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
