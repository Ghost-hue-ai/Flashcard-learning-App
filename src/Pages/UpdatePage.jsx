import React, {useState} from 'react';
import appService from '../appwrite/authConfig.js'
import storageServ from "../appwrite/bucketConfig.js";
import {useDispatch} from "react-redux";
import {updateProfilePic, updateRecentLogs} from "../store/CompletedCard.js";
import {useNavigate} from "react-router-dom";

function UpdatePage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [dragging, setDragging] = useState(false)
    const [img, setImg] = useState(null)
    const [preview, setPreview] = useState(null)

    // Profile form state (no handlers yet)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        description: '',
        college: '',
        occupation: '',
        twitter: '',
        linkedin: '',
        instagram: '',
        about: '',
    })

    function handleDragOver(e){
        e.preventDefault()
        setDragging(true)
    }
    function handleDrop(e){
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files[0]
        if(file && file.type.startsWith('image/')){
            setPreview(URL.createObjectURL(file))
            setImg(file)
        }
    }
    function handleDragLeave(e){
        e.preventDefault()
        setDragging(false)
    }

    // Just a placeholder for now to keep inputs controlled (optional)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg space-y-8">

            <form onSubmit={async (e) => {
                e.preventDefault()
                try {
                    if(!img) {
                        alert('image is not valid')
                        return
                    }

                    const uploadedFile = await storageServ.saveFile(img)
                    if(uploadedFile) {
                        dispatch(updateProfilePic(uploadedFile.$id))
                        setPreview(null);
                        setImg(null);
                        dispatch(updateRecentLogs('Profile updated'))
                        navigate('/dashboard')
                    }
                } catch (e) {
                    console.log(e)
                    alert('uploading failed')
                }
            }}>

                {/* Profile Pic Upload */}
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`w-40 h-40 rounded-full border-4 border-dashed flex items-center justify-center cursor-pointer mx-auto
            ${dragging ? 'border-blue-500 bg-blue-100' : 'border-gray-400 bg-white'}
          `}
                >
                    {preview ? (
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <label className="text-center text-gray-600 cursor-pointer">
                            Drag & drop<br />
                            or click to upload
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file && file.type.startsWith('image/')) {
                                        setPreview(URL.createObjectURL(file));
                                        setImg(file);
                                    }
                                }}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>

                {/* Profile inputs */}
                <div className="flex gap-4 mt-6">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <textarea
                    name="description"
                    placeholder="Tell us about you (short description)"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
                />

                <div className="flex gap-4 mt-4">
                    <input
                        type="text"
                        name="college"
                        placeholder="College"
                        value={formData.college}
                        onChange={handleChange}
                        className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="space-y-3 mt-4">
                    <input
                        type="url"
                        name="twitter"
                        placeholder="Twitter URL"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="url"
                        name="linkedin"
                        placeholder="LinkedIn URL"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="url"
                        name="instagram"
                        placeholder="Instagram URL"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <textarea
                    name="about"
                    placeholder="More about you..."
                    value={formData.about}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mt-4"
                />

                <button
                    type="submit"
                    className="w-full py-3 bg-gray-700 hover:bg-gray-500 active:bg-gray-300 text-white font-semibold rounded-3xl mt-6"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UpdatePage;
