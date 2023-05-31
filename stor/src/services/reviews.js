import http from "../http-common";

class ReviewDataService {
  getAll() {
    return http.get("/opinion");
  }

  createOpinion(data) {
    return http.post("/opinion", data);
  }

  updateOpinion(data) {
    return http.put(`/opinion`, data);
  }

  deleteOpinion(email) {
    console.log(email);

    return http.delete(`/opinion?Snumber=${email}`);
  }
}

export default new ReviewDataService();
