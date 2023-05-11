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
}

export default new UserDataService();
