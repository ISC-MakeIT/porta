import LogoutButton from "../components/LogoutButton.jsx";
import { useParams, Link } from "react-router-dom";

// TODO: Headerコンポーネントをこの画面に追加する

const User = () => {
  let params = useParams();
  return (
    <div>
      <h1>User {params.user_id}</h1>
      <Link to={`/edit/${params.user_id}`}>Edit</Link>
      <LogoutButton />
    </div>
  );
};

export default User;
