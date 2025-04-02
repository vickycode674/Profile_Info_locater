import { useState, useEffect } from "react";

const EditProfileModal = ({ profile, onClose, onSave }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  useEffect(() => {
    setUpdatedProfile(profile);
  }, [profile]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Coordinate Change
  const handleCoordChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: parseFloat(value) },
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
        <input type="text" name="name" value={updatedProfile.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full mt-2" />
        <input type="text" name="photo" value={updatedProfile.photo} onChange={handleChange} placeholder="Photo URL" className="border p-2 w-full mt-2" />
        <input type="text" name="description" value={updatedProfile.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full mt-2" />
        <input type="text" name="address" value={updatedProfile.address} onChange={handleChange} placeholder="Address" className="border p-2 w-full mt-2" />
        <input type="email" name="email" value={updatedProfile.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full mt-2" />
        <input type="text" name="phone" value={updatedProfile.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full mt-2" />
        <input type="number" name="lat" value={updatedProfile.location.lat} onChange={handleCoordChange} placeholder="Latitude" className="border p-2 w-full mt-2" />
        <input type="number" name="lng" value={updatedProfile.location.lng} onChange={handleCoordChange} placeholder="Longitude" className="border p-2 w-full mt-2" />

        <div className="flex justify-between mt-4">
          <button onClick={() => onSave(updatedProfile)} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
