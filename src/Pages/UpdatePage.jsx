import React, { useState, useRef } from 'react';
import {useDispatch} from "react-redux";
import {updateData} from "../store/authSlice.js";

const UpdatePage = () => {
    const [dragging, setDragging] = useState(false);
    const fileInputRef = useRef();
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const [age, setAge] = useState('');

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => setDragging(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            setProfileImage(URL.createObjectURL(file));
        } else {
            console.warn("Not an image file:", file);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setProfileImage(URL.createObjectURL(file));
        } else {
            console.warn("Not an image file:", file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-3xl font-bold text-purple-700 mb-10">Update Profile</h1>

            {/* Profile Picture Dropzone */}
            <div
                className={`w-40 h-40 border-4 border-dashed rounded-full overflow-hidden flex items-center justify-center text-center mb-6 cursor-pointer transition ${
                    dragging ? 'border-purple-500 bg-purple-100' : 'border-gray-300'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
            >
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                    <p className="text-sm text-gray-500">Drop image or click to upload</p>
                )}
            </div>

            {/* Input Fields */}
            <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4"
                  onSubmit={()=>{
                      dispatch(updateData({ name: name, age: age, avatar : profileImage }))

                  }}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
                        placeholder="Enter your age"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdatePage;
