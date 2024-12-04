import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContextProvider";

const Profile = () => {
  const { userDetails, setUserDetails } = useContext(LoginContext);

  const loginUser = () => {
    setUserDetails({ name: "John Doe", email: "john@example.com" }); // Set new user details
  };

  return (
    <div>
      <h1>Hello, {userDetails ? userDetails.name : "Guest"}!</h1>
      <button onClick={loginUser}>Login as John Doe</button>
    </div>
  );
};

export default Profile;
