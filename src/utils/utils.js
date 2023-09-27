// jwt import
import jwtDecode from "jwt-decode";

// api import
import { axiosReq } from "../api/axiosDefaults";

/*
Code from Code Institute Moments walkthrough project
*/

// loads next page of results for infinite scroll if hasMore prop is true
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

// handle unneccesary network requests by unauthenticated users
// set new token
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

// refresh token
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

// remove token
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
