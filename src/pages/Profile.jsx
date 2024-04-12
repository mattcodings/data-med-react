import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  console.log(user);
  const { email, name, nickname, picture } = user;
  return (
    <div>
      Profile
      <img src={picture} />
    </div>
  );
};
export default Profile;
