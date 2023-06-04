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
    return http.get("/login", { params: { email, password } });
  }

  deleteUser(name) {
    console.log(name);

    return http.delete(`/users?name=${name}`);
  }
  loginUser(email, password) {
    console.log("enter in api");
    console.log(email, password);

    return http.post("users/login", { email, password });
  }
  loginUser(email, password) {
    console.log("enter in api");
    return http.get("/login", { params: { email, password } });
  }
}

export default new UsersDataService();
