import { useState } from "react";
import MapComponent from "./MapComponent";

const AdminPanel = ({ addProfile, profiles, setProfiles, setSelectedProfile,filteredProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
    email: "",
    phone: "",
    location: { lat: "", lng: "" },
  });

  const [selectedProfile, setLocalSelectedProfile] = useState(null);
  const [editProfile, setEditProfile] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); // Controls add form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCoordChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: parseFloat(value) },
    }));
  };

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.location.lat || !newProfile.location.lng) {
      alert("Please fill in all required fields including location!");
      return;
    }
    addProfile(newProfile);
    setNewProfile({
      name: "",
      photo: "",
      description: "",
      address: "",
      email: "",
      phone: "",
      location: { lat: "", lng: "" },
    });
    setShowAddForm(false); // Hide form after adding profile
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    setSelectedProfile(null);
  };

  const openEditPopup = (profile) => {
    setEditProfile(profile);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditCoordChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: parseFloat(value) },
    }));
  };

  const saveEditedProfile = () => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === editProfile.id ? editProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditProfile(null);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <button onClick={() => setShowAddForm(!showAddForm)} className="bg-blue-500 text-white p-2 rounded mt-4">
        {showAddForm ? "Close Form" : "Add New Profile"}
      </button>

      {showAddForm && (
        <div className="mt-6 p-5 border rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Add New Profile</h2>
          <input type="text" name="name" value={newProfile.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full mt-2" />
          <input type="text" name="photo" value={newProfile.photo} onChange={handleChange} placeholder="Photo URL" className="border p-2 w-full mt-2" />
          <input type="text" name="description" value={newProfile.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full mt-2" />
          <input type="text" name="address" value={newProfile.address} onChange={handleChange} placeholder="Address" className="border p-2 w-full mt-2" />
          <input type="email" name="email" value={newProfile.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full mt-2" />
          <input type="text" name="phone" value={newProfile.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full mt-2" />
          <input type="number" name="lat" value={newProfile.location.lat} onChange={handleCoordChange} placeholder="Latitude" className="border p-2 w-full mt-2" />
          <input type="number" name="lng" value={newProfile.location.lng} onChange={handleCoordChange} placeholder="Longitude" className="border p-2 w-full mt-2" />
          <button onClick={handleAddProfile} className="bg-green-500 text-white p-2 rounded w-full mt-2">
            Add Profile
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="border p-4 rounded-lg shadow-md bg-white">
            <img src={profile.photo} alt={profile.name} className="w-20 h-20 rounded-full mx-auto" />
            <h2 className="text-lg font-semibold text-center">{profile.name}</h2>
            <p className="text-gray-600 text-sm text-center">{profile.description}</p>
            <p className="text-gray-500 text-xs text-center">{profile.address}</p>
            <button onClick={() => openEditPopup(profile)} className="bg-yellow-500 text-white p-2 rounded w-full mt-2">
              Edit
            </button>
            <button onClick={() => deleteProfile(profile.id)} className="bg-red-500 text-white p-2 rounded w-full mt-2">
              Delete
            </button>
          </div>
        ))}
      </div>

      {editProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold">Edit Profile</h2>
            <input type="text" name="name" value={editProfile.name} onChange={handleEditChange} className="border p-2 w-full mt-2" />
            <input type="text" name="photo" value={editProfile.photo} onChange={handleEditChange} className="border p-2 w-full mt-2" />
            <input type="text" name="description" value={editProfile.description} onChange={handleEditChange} className="border p-2 w-full mt-2" />
            <input type="text" name="address" value={editProfile.address} onChange={handleEditChange} className="border p-2 w-full mt-2" />
            <input type="number" name="lat" value={editProfile.location.lat} onChange={handleEditCoordChange} className="border p-2 w-full mt-2" />
            <input type="number" name="lng" value={editProfile.location.lng} onChange={handleEditCoordChange} className="border p-2 w-full mt-2" />
            <button onClick={() => setEditProfile(null)} className="bg-green-500 text-white p-2 rounded w-full mt-2">Save Changes</button>
            <button onClick={() => setEditProfile(null)} className="bg-red-500 text-white p-2 rounded w-full mt-2">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
