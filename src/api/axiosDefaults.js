import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-review-dc5d5f6a2d20.herokuapp.com/'
// axios.defaults.baseURL = 'https://8000-haloegen-ciproject5api-n7qze71tqaf.ws-eu114.gitpod.io'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();

