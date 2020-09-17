import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  console.log("Logout");
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return (
      <Button
        color="primary"
        variant="outlined"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    );
  } else {
    return <></>;
  }
};

export default LogoutButton;
