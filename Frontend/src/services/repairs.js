import http from "../http-common";

class RepairsDataService {
  getAll() {
    return http.get("/repairs");
  }

  createRepairs(data) {
    return http.post("/repairs", data);
  }

  updateRepairs(data) {
    return http.put(`/repairs`, data);
  }

  deleteRepairs(SnumberRoom) {
    console.log(SnumberRoom);

    return http.delete(`/repairsSnumberRoom=${SnumberRoom}`);
  }
}

export default new RepairsDataService();
