<<<<<<< HEAD
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
=======
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
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
