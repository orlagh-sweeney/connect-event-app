import axios from "axios";

axios.defaults.baseURL = "https://drf-event-api-8dabfe6ebdec.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;