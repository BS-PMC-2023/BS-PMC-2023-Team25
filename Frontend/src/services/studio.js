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
