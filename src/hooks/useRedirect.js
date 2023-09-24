// react imports
import { useEffect } from "react";
import { useHistory } from "react-router";

// api imports
import axios from "axios";

/*
Code from Code Institute Moments walkthrough project:
Redirects users back to the homepage based on 
the users logged in or logged out status
*/

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};