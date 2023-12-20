import axios from "axios";
const BASE_URL = "http://localhost:8989/garden";
export default class UserService {
  
  validateUser(credentials) {
    return axios.post(BASE_URL + "/auth/user/authenticate", credentials);
  }
  registerUser(user) {
    return axios.post(BASE_URL + "/auth/user/register", user);
  }
  getUserByEmail(email) {
    const token = localStorage.getItem("auth");
    return axios.get(BASE_URL + "/user/get/" + email, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  updateUser(id, user) {
    const token = localStorage.getItem("auth");
    return axios.put(BASE_URL + "/" + id, user, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deleteuser(id) {
    const token = localStorage.getItem("auth");
    return axios.delete(BASE_URL + "/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
