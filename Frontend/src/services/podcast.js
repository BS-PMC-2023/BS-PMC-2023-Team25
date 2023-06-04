import http from "../http-common";

class PodcastDataService {
  getAll() {
<<<<<<< HEAD
    return http.get("/podcast");
  }

  createPodcast(data) {
    return http.post("/podcast", data);
  }

  updatePodcast(data) {
    return http.put(`/podcast`, data);
=======
    return http.get("/podcasts");
  }

  createPodcast(data) {
    return http.post("/podcasts", data);
  }

  updatePodcast(data) {
    return http.put(`/podcasts`, data);
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  }

  deletePodcast(SnumberRoom) {
    console.log(SnumberRoom);

<<<<<<< HEAD
    return http.delete(`/podcast?SnumberRoom=${SnumberRoom}`);
=======
    return http.delete(`/podcasts?SnumberRoom=${SnumberRoom}`);
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  }
}

export default new PodcastDataService();
