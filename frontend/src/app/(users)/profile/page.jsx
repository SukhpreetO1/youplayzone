"use client";
import { ProfileForm, ProfileAdditionalDetailsForm, POSTGRES_API_PROFILE, axiosInstance, toast } from "@/app/routes/route.jsx";
import { useEffect, useState } from "react";

const Profile = () => {
  const [userDetails, setUserDetails] = useState("");
  const [userAdditionalDetails, setUserAdditionalDetails] = useState("");
  useEffect(()=> {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(POSTGRES_API_PROFILE);
        if (response.status === 200) {
          const userData = response.data.user;
          const userAdditionalDetails = response.data.users_additional_details;
          setUserDetails(userData);
          setUserAdditionalDetails(userAdditionalDetails);
        }
      } catch (error) {
        console.log("Unable to fetch user details : ", error);
        toast.error("Something went wrong. Please try again later");
      }
    };
    fetchUserDetails();
  }, [])

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <ProfileForm userDetails={userDetails}/>
          </div>
        </div>
      </div>
      <div className="relative bg-muted flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            <ProfileAdditionalDetailsForm userDetails={userDetails} userAdditionalDetails={userAdditionalDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile