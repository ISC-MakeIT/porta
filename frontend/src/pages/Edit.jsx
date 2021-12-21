import { useParams, Link } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return (
    <div>
      <h1>Edit {params.user_id}</h1>
      <Link to={`/user/${params.user_id}`}>User</Link>
    </div>
  );
};

export default Edit;
