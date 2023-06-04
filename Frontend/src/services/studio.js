<<<<<<< HEAD
import http from "../http-common";

class StudioDataService {
  getAll() {
    return http.get("/studio");
  }

  createOpinion(data) {
    return http.post("/studio", data);
  }

  updateOpinion(data) {
    return http.put(`/studio`, data);
  }

  deleteOpinion(studioNum) {
    console.log(studioNum);

    return http.delete(`/studio?studioNum=${studioNum}`);
  }
}

export default new StudioDataService();
=======
import http from "../http-common";

class StudioDataService {
  getAll() {
    return http.get("/studios");
  }

  createOpinion(data) {
    return http.post("/studios", data);
  }

  updateOpinion(data) {
    return http.put(`/studios`, data);
  }

  deleteOpinion(studioNum) {
    console.log(studioNum);

    return http.delete(`/studios?studioNum=${studioNum}`);
  }
}

export default new StudioDataService();
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
