import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!user) {
    <p>You are not logged in.</p>;
  }
  return (
    <div>
      <Image
        src={user?.picture || "/placehold/216x216.png"}
        alt="avator"
        width={216}
        height={216}
      />
      <h1>Name: {user?.name}</h1>
      <p>Nickname: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Profile: {user?.profile}</p>
      <p>UserId: {user?.sub}</p>
    </div>
  );
};

export default Profile;
