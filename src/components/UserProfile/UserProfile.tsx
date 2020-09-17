import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isAuthenticated) {
    return (
      { isAuthenticated } && (
        <div className="Profile">
          <img src={user.picture} alt={user.name} className="ProfilePicture" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
    );
  } else {
    return <></>;
  }
};

export default UserProfile;
