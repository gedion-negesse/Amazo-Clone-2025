import axios from "axios";
const axiosInstance = axios.create({
  // local instance of firebase functions url
  //baseURL: "http://127.0.0.1:5001/clone-2025-7f12b/us-central1/api",

  //deployed version of Amazon-clone-2025 server on firebase function
  baseURL: "https://api-meg555guhq-uc.a.run.app/",

  //deployed version of amzon-api server on render.com
  //baseURL: "https://amazon-api-eu5z.onrender.com/",
});
export { axiosInstance };
