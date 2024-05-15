import axios from "axios";

axios.defaults.baseURL = 'https://review-app-drf-b1e1686b7d68.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

