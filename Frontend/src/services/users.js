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

  loginUser(email, password) {
    console.log("enter in api");
    console.log(email, password);

    return http.post("/users/login", { email, password });
  }

  deleteUser(email) {
    console.log(email);

    return http.delete(`/users?email=${email}`);
  }
}

export default new UsersDataService();
