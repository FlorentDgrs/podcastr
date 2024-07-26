const Profile = ({
  params: { profileId },
}: {
  params: { profileId: string };
}) => {
  return (
    <div>
      <h1 className="text-xl text-white-1">{profileId}</h1>
    </div>
  );
};

export default Profile;
