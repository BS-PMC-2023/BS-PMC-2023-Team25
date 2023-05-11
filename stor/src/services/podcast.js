import http from "../http-common";

class PodcastDataService {
  getAll() {
    return http.get("/podcast");
  }

  createPodcast(data) {
    return http.post("/podcast", data);
  }

  updatePodcast(data) {
    return http.put(`/podcast`, data);
  }

  deletePodcast(SnumberRoom) {
    console.log(SnumberRoom);

    return http.delete(`/podcast?SnumberRoom=${SnumberRoom}`);
  }
}

export default new PodcastDataService();
