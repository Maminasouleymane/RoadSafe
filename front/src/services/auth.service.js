import axios from "axios";

const API_URL = "http://localhost:3004/admin/";

class AuthService {
  login(userName, password) {
    return axios
      .post(API_URL + "login", {
        userName,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
