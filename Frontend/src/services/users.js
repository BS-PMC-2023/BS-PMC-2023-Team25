import http from "../http-common";

class UsersDataService {
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

  deleteUser(email) {
    console.log(email);
    return http.delete(`/users?email=${email}`);
  }
  loginUser(email, password) {
    console.log("enter in api");
    return http.get("/login", { params: { email, password } });
  }
}

export default new UsersDataService();
