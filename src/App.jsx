import { useState, useEffect } from "react";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import MapComponent from "./components/MapComponent";
import profilesData from "../profile.json";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Load profiles on mount
  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  // Filter profiles based on search input
  const filteredProfiles = searchTerm
  ? profiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : profiles; 

  // Handle adding a new profile
  const addProfile = (newProfile) => {
    const updatedProfile = { id: profiles.length + 1, ...newProfile };
    setProfiles((prev) => [...prev, updatedProfile]);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Profile Map Viewer</h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 w-80"
        />
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowAdmin(!showAdmin)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {showAdmin ? "Hide Admin Panel" : "Show Admin Panel"}
        </button>
      </div>

      {showAdmin && (
        <AdminPanel
          addProfile={addProfile}
          profiles={profiles}
          setProfiles={setProfiles}
          filteredProfiles={filteredProfiles}s
          setSelectedProfile={setSelectedProfile}
        />
      )}

      {!showAdmin && (<ProfileList filteredProfiles={filteredProfiles} onSelectProfile={setSelectedProfile} />)}

      {selectedProfile  && <ProfileDetails profile={selectedProfile} onClose={() => setSelectedProfile(null)} />}

    </div>
  );
};

export default App;
