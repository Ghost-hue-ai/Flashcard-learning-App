import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import appService from "../appwrite/authConfig.js";
import storageServ from "../appwrite/bucketConfig.js";
import {
  updateProfilePic,
  updateRecentLogs,
  updateUserData,
} from "../store/CompletedCard.js";
import SEO from "../Components/SEO.jsx";
import LogRocket from "logrocket";

function UpdatePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.card.userData);

  const [dragging, setDragging] = useState(false);
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    firstName: userData.firstName || "",
    lastName: userData.lastName || "",
    description: userData.description || "",
    college: userData.college || "",
    occupation: userData.occupation || "",
    twitter: userData.twitter || "",
    linkedin: userData.linkedin || "",
    instagram: userData.instagram || "",
    about: userData.about || "",
  });

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      setImg(file);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <SEO
        title="Update Profile | Flashcard Learning App"
        description="Update your profile information and personalize your learning experience."
      />
      <div className="min-h-screen w-full bg-gray-900 text-white py-10 px-6 sm:px-10">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (!img && !userData.profilePic) {
                alert("Please add a profile image.");
                return;
              }

              const uploadedFile = img ? await storageServ.saveFile(img) : null;
              await appService.updateUserName(
                `${formData.firstName} ${formData.lastName}`
              );

              if (uploadedFile) {
                dispatch(updateProfilePic(uploadedFile.$id));
                setPreview(null);
                setImg(null);
              }

              dispatch(updateUserData({ ...formData }));
              dispatch(updateRecentLogs("Profile updated"));
              navigate("/dashboard");
            } catch (error) {
              LogRocket.captureException(error);
              alert("Uploading failed.");
            }
          }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-purple-400">
            Update Your Profile
          </h2>

          {/* Profile Pic Upload */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-40 h-40 rounded-full border-4 border-dashed flex items-center justify-center cursor-pointer mx-auto
                        ${
                          dragging
                            ? "border-purple-500 bg-purple-100"
                            : "border-gray-500 bg-gray-800"
                        }
                    `}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <label className="text-center text-gray-300 cursor-pointer">
                Drag & drop
                <br />
                or click to upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.type.startsWith("image/")) {
                      setPreview(URL.createObjectURL(file));
                      setImg(file);
                    }
                  }}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Input fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <textarea
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="twitter"
              placeholder="Twitter URL"
              value={formData.twitter}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.linkedin}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              name="instagram"
              placeholder="Instagram URL"
              value={formData.instagram}
              onChange={handleChange}
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <textarea
            name="about"
            placeholder="More about you..."
            value={formData.about}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-500 active:bg-purple-400 text-white font-semibold rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdatePage;
