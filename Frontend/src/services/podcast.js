import http from "../http-common";

class PodcastDataService {
  getAll() {
    return http.get("/podcasts");
  }

  createPodcast(data) {
    return http.post("/podcasts", data);
  }

  updatePodcast(data) {
    return http.put(`/podcasts`, data);
  }

  deletePodcast(SnumberRoom) {
    console.log(SnumberRoom);

    return http.delete(`/podcasts?SnumberRoom=${SnumberRoom}`);
  }
}

export default new PodcastDataService();
