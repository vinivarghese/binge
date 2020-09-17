import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return (
      <Button
        color="primary"
        variant="outlined"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    );
  } else {
    return <></>;
  }
};

export default LoginButton;
