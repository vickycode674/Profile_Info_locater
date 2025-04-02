import ProfileCard from "./ProfileCard";

const ProfileList = ({ filteredProfiles, onSelectProfile }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} showMap={onSelectProfile} />
        ))
      ) : (
        <p className="text-center text-gray-500">No profiles found.</p>
      )}
    </div>
  );
};

export default ProfileList;
