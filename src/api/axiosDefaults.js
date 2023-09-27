import axios from "axios";

/*
Code from Code Institute Moments walkthrough project
*/

axios.defaults.baseURL = "https://drf-event-api-8dabfe6ebdec.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();