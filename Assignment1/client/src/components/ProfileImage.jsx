import profile from '../assets/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="text-center mt-4 mb-4">
      <img
        src={profile}
        alt="Profile"
        className="rounded-circle"
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          border: '3px solid #007bff'
        }}
      />
    </div>
  );
};

export default ProfileImage;
