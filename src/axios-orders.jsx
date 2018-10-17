import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-39b74.firebaseio.com/"
});

export default instance;
