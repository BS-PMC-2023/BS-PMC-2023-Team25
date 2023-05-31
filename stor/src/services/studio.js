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
