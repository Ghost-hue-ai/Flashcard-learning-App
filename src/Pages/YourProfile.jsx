import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import storageServ from "../appwrite/bucketConfig.js";
import SEO from "../Components/SEO.jsx";

function YourProfile() {
  const profilePicId = useSelector((state) => state.card.profilePic);
  const userData = useSelector((state) => state.card.userData);
  const [profilePicUrl, setProfilePicUrl] = useState(null);

  useEffect(() => {
    if (profilePicId) {
      setProfilePicUrl(storageServ.getFilePreview(profilePicId));
    }
  }, [profilePicId]);

  const fields = [
    { label: "First Name", value: userData.firstName },
    { label: "Last Name", value: userData.lastName },
    { label: "Description", value: userData.description },
    { label: "College", value: userData.college },
    { label: "Occupation", value: userData.occupation },
    { label: "Twitter", value: userData.twitter },
    { label: "LinkedIn", value: userData.linkedin },
    { label: "Instagram", value: userData.instagram },
    { label: "About", value: userData.about },
  ];

  return (
    <>
      <SEO
        title="Your Profile | Flashcard Learning App"
        description="View and manage your profile details on the Flashcard Learning App."
      />
      <div className="min-h-screen w-full bg-gray-900 text-white py-10 px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-purple-400 mb-8">
          Your Profile
        </h2>

        <div className="flex justify-start mb-8">
          {profilePicUrl ? (
            <img
              src={profilePicUrl}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 text-sm">
              No Image
            </div>
          )}
        </div>

        <div className="space-y-6">
          {fields.map(({ label, value }) => (
            <div
              key={label}
              className="bg-gray-800 p-5 rounded-md shadow-inner border border-gray-700"
            >
              <p className="text-sm text-purple-300 uppercase tracking-wide font-semibold">
                {label}
              </p>
              {value ? (
                <p className="mt-1 text-white">{value}</p>
              ) : (
                <Link
                  to="/updateProfile"
                  className="mt-1 text-red-400 italic underline hover:text-red-300 transition"
                >
                  Please add this field
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YourProfile;
