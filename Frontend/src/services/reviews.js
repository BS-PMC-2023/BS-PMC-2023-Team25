import http from "../http-common";

class ReviewDataService {
  getAll() {
    return http.get("/reviews");
  }

  createOpinion(data) {
    return http.post("/reviews", data);
  }

  updateOpinion(data) {
    return http.put(`/reviews`, data);
  }

  deleteOpinion(email) {
    console.log(email);

    return http.delete(`/reviews?Snumber=${email}`);
  }
}

export default new ReviewDataService();
