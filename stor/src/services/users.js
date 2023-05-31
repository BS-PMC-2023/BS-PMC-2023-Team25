import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  createUser(data) {
    console.log(data);

    return http.post("/users", data);
  }

  updateUser(data) {
    return http.put(`/users`, data);
  }

  deleteUser(name) {
    console.log(name);

    return http.delete(`/users?name=${name}`);
  }
  loginUser(email, password) {
    console.log("enter in api");
    return http.get("/login", { params: { email, password } });
  }
}

export default new UserDataService();
