"use client";
import React, { useEffect, useState } from "react";
import { SideBar } from "@/component/SideBar";
import Profiles from "@/component/Profiles";
import { ProfileDetails } from "@/component/ProfileDetails";
import { Profile } from "@/lib/types";
import { profiles } from "@/lib/data";

const Home = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [allProfiles, setProfiles] = useState<Profile[] | null>(null);

  useEffect(() => {
    setProfiles(profiles);
  }, []);
  useEffect(() => {
    if (allProfiles !== null) {
      setProfile(allProfiles[0]);
    }
  }, [allProfiles]);

  const handleSelectProfile = (id: number = 1) => {
    const filteredData = allProfiles?.find((data) => data.id === id) || null;
    setProfile(filteredData);
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full">
        <SideBar />
        <Profiles
          handleSelectProfile={handleSelectProfile}
          profile={allProfiles}
        />
        <ProfileDetails profile={profile} />
        {/* <div className="w-3/6 flex mt-[104px] rounded-md">
          
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
        </div> */}
      </div>
      <footer className=" text-[rgb(193,202,214)] text-[12px] font-[500] flex items-center justify-around h-12">
        <div style={{ marginLeft: "50px" }}>Privacy @2024</div>
        <div className="space-x-5 ">
          <a href="#">Contact Us</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
