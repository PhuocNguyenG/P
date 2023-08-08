"use client"
import axios from "axios";
const URL = () => {
  let varEnv = "";

  switch (process.env.NODE_ENV) {
    case "development":
      varEnv = "http://localhost:5000/api";
      break;
    case "production":
      varEnv = "https://phuoc-linh-co-phuocnguyeng.vercel.app/api";
      break;
    default:
      varEnv = "";
      break;
  }

  return varEnv;
};
axios.create({
    baseURL: URL(),
  });
let token: string | null | undefined;
if (typeof window !== 'undefined') {
    // Perform localStorage action
 token = localStorage.getItem("PLAdminToken")
 ? localStorage.getItem("PLAdminToken")?.toString().replace(/"/g, "")
 : null;
}
 
const axiosAuth = axios.create({
  baseURL: URL(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

axiosAuth.interceptors.request.use(async (req) => {
  if (!token) {
    token = localStorage.getItem("PLAdminToken")
      ? localStorage.getItem("PLAdminToken")?.toString().replace(/"/g, "")
      : null;
    req.headers.Authorization = `Bearer ${token}`;
  }

  const response = await axios.post(`/user/refresh`);

  localStorage.setItem("authTokens", JSON.stringify(response.data));
  req.headers.Authorization = `Bearer ${response.data.token}`;
  return req;
});

export default axiosAuth;

