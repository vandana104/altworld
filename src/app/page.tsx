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
