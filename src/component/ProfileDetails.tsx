import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Profile } from "@/lib/types";
import { Progress } from "@/components/ui/progress";

interface ProfileDetailsProps {
  profile: Profile | null;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  const [isShortlisted, setIsShortlisted] = useState<boolean>(false);

  useEffect(() => {
    const profiles: Profile[] = JSON.parse(
      localStorage.getItem("profiles") || "[]",
    );
    const isProfileInLocalStorage = profiles.some(
      (p) => p.name === profile?.name,
    );
    setIsShortlisted(isProfileInLocalStorage);
  }, [profile]);
  if (!profile) {
    return null;
  }

  const handleShortList = () => {
    let profiles: Profile[] = JSON.parse(
      localStorage.getItem("profiles") || "[]",
    );

    const isProfileAlreadyShortlisted = profiles.some(
      (p) => p.name === profile?.name,
    );

    if (!isProfileAlreadyShortlisted && profile) {
      profiles.push(profile);
      localStorage.setItem("profiles", JSON.stringify(profiles));
      setIsShortlisted(true);
      console.log("Profile added to shortlist:", profile.name);
    } else {
      console.log("Profile is already in the shortlist.");
    }
  };
  const handleRemoveShortList = () => {
    let profiles: Profile[] = JSON.parse(
      localStorage.getItem("profiles") || "[]",
    );

    const updatedProfiles = profiles.filter((p) => p.name !== profile?.name);

    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    setIsShortlisted(false);
    console.log("Profile removed from shortlist:", profile?.name);
  };

  return (
    <div className="flex ">
    <div className="w-1/2 flex flex-col bg-white p-4 rounded-md pt-32 ">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={profile.image}
            alt="alt"
            width={50}
            height={40}
            className="rounded-md mr-3"
          />

          <div className="flex flex-col mx-2">
            <h3 className="font-bold">{profile.name}</h3>
            <p className="text-sm text-gray-500 font-[450]">{profile.email}</p>
          </div>
        </div>
        <h1 className="text-[#2ebd59] text-xl font-bold">
          {profile.percentage}%
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Behavioural</span>
          <Progress value={profile.behaviour} className="w-3/5" />
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Communication</span>
          <Progress value={profile.communication} className="w-3/5" />
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 truncate">
            Situation handling
          </span>
          <Progress value={profile.situation_handling} className="w-3/5" />
        </div>
      </div>
      <div>
        <h2 className="font-bold mt-6 mb-2">About</h2>
        <p className="text-sm text-gray-600">{profile.about}</p>
      </div>
      <div>
        <h2 className="font-bold mt-6 mb-2">Experience</h2>
        <p className="text-sm text-gray-600">{profile.experience}</p>
      </div>
      <div>
        <h2 className="font-bold mt-6 mb-2">Hobbies</h2>
        <p className="text-sm text-gray-600">{profile.hobbies}</p>
      </div>
      <div>
        <h2 className="font-bold mt-6 mb-2">Introduction</h2>
        <p className="text-sm text-gray-600">{profile.introduction}</p>
      </div>
      <div className="flex justify-center mb-8">
        {isShortlisted ? (
          <button
            onClick={handleRemoveShortList}
            className="bg-red-500 text-white rounded-md py-1 text-sm font-semibold mt-8 w-64 h-8">
            REMOVE FROM SHORTLIST
          </button>
        ) : (
          <button
            onClick={handleShortList}
            className="bg-teal-400 text-white rounded-md py-1 text-sm font-semibold mt-8 w-64 h-8">
            SHORTLIST
          </button>
        )}
      </div>
    </div>





<div className="w-3/6 flex mt-[104px] rounded-md">
          
          <div className="w-11/12 p-2">
            <div style={{ height: "500px" }} >
              <video
                autoPlay
                controls
                style={{ height: "100%", width: "100%", borderRadius: "10px" }}>
                <source
                  src="https://www.youtube.com/embed/p80VyQ5wLvg?si=cLATPyHUBq5yCwNf"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        </div>
  );
};
