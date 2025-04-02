import React from "react";

const ProfileCard = ({ profile, showMap }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <img src={profile.photo} alt={profile.name} className="w-20 h-20 rounded-full mx-auto" />
      <h2 className="text-lg font-semibold text-center">{profile.name}</h2>
      <p className="text-gray-600 text-sm text-center">{profile.bio}</p>
      <button onClick={() => showMap(profile)} className="bg-blue-500 text-white p-2 rounded w-full mt-2">
       Summary
      </button>
    </div>
  );
};

export default ProfileCard;
