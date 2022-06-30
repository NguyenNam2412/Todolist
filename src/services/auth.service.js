import axios from "axios";

//npx json-server --watch db.json --port 8000
const API_URL = "http://localhost:8000/";

const register = (payload) => {
  return axios.post(API_URL + "user", {
    username: payload.username,
    password: payload.password,
  });
};

const login = async (payload) => {
  return axios
    .get(API_URL + "user?username=" + payload.username + "&password=" + payload.password)
    .then((response) => {
      if (response.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      else {
        const error = (response.data && response.data.message) || response.statusText;
        return Promise.reject(error);
      }
      
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;