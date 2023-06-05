import http from "../http-common";

class StudioDataService {
  getAll() {
    return http.get("/studios");
  }

  createStudio(data) {
    return http.post("/studios", data);
  }

  updateStudio(data) {
    return http.put(`/studios`, data);
  }

  deleteStudio(studioNum) {
    console.log(studioNum);

    return http.delete(`/studios?studioNum=${studioNum}`);
  }
}

export default new StudioDataService();
