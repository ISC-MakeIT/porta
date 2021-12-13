import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Message = () => {
  const [message, setMessage] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    console.log(token);
    const response = await fetch("http://localhost:3010/api/private", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const body = await response.text();
    setMessage(body);
  };

  return (
    <>
      <h1>Message</h1>
      <p>{message}</p>
      <button onClick={handleSubmit}>Click</button>
    </>
  );
};

export default Message;
