import MapComponent from "./MapComponent";

const ProfileDetails = ({ profile, onClose }) => {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-1/2">
        <button onClick={onClose} className="bg-red-500 text-white px-3 py-1 rounded">Close</button>
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p>{profile.description}</p>
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
        <MapComponent location={profile.location} />
      </div>
    </div>
  );
};

export default ProfileDetails;
