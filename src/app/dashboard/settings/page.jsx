"use client";

import React, { useState } from "react";
import profile from "../../assets/download.jpg";
import Image from "next/image";
import Swal from "sweetalert2";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    address: "123 Main Street, New York, NY 10001",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    Swal.fire({
      title: "Profile updated!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <div className="text-white">
      {/* Tabs */}
      <div className="flex gap-10 pb-4 mb-8">
        <button
          onClick={() => {
            setActiveTab("profile");
            setIsEditing(false);
          }}
          className={`text-xl ${
            activeTab === "profile"
              ? "text-white border-b-2 border-blue-500 "
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`text-xl ${
            activeTab === "password  "
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Password Settings
        </button>
      </div>

      {/* PROFILE TAB */}
      {activeTab === "profile" && (
        <div className="space-y-8 animate-fadeIn">
          {/* Profile Image */}
          <div>
            <h3 className="text-lg mb-1">Profile Image</h3>
            <div className="flex items-end gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30">
                <Image
                  src={profile}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm px-4 py-2 rounded-xl
                  bg-gradient-to-b from-[#1e293b] to-[#0f172a]
                  border border-white/20 bg-white/10
                  shadow-[inset_0_0_20px_rgba(255,255,255,0.35)]"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* VIEW MODE */}
          {!isEditing && (
            <div className="w-full max-w-lg">
              <ProfileRow label="Full Name" value={formData.name} />
              <ProfileRow label="Email" value={formData.email} />
              <ProfileRow label="Store Name" value={formData.storeName} />
              <ProfileRow label="Store Address" value={formData.address} />
            </div>
          )}

          {/* EDIT MODE */}
          {isEditing && (
            <div className="max-w-3/4  space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Store Name"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                />
                <InputField
                  label="Store Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center gap-3 pt-6">
                <button
                  onClick={handleSaveProfile}
                  className=" w-[350px] cursor-pointer py-2 rounded-xl bg-green-600 hover:bg-green-700 text-sm"
                >
                  Save Changes
                </button>
                {/* <button
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2 rounded-xl border border-gray-600 text-sm"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          )}
        </div>
      )}

      {/* PASSWORD TAB */}
      {activeTab === "password" && (
        <div className="space-y-6 animate-fadeIn max-w-sm">
          <p className="text-gray-400">Change your password here.</p>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-white/5 border border-gray-700 p-2 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full bg-white/5 border border-gray-700 p-2 rounded"
          />
          <button className="bg-blue-600 px-4 py-2 rounded text-sm">
            Update Password
          </button>
        </div>
      )}
    </div>
  );
};

/* Reusable Components */

const ProfileRow = ({ label, value }) => (
  <div className="py-3 border-b border-blue-900">
    <span className="text-gray-300">{label}:</span>
    <span className="text-white ml-6">{value}</span>
  </div>
);

const InputField = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="block text-sm text-gray-400 mb-1">{label}</label>
    <input
      {...props}
      className="w-full bg-[#0b1120] border border-slate-700 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-blue-500"
    />
  </div>
);

export default ProfileSettings;
