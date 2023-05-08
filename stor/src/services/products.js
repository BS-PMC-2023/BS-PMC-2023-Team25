import http from "../http-common";

class ProductDataService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createProd(data) {
    return http.post("/manager", data);
  }

  updateProd(data) {
    return http.put("/manager", data);
  }

  deleteProd(Snumber) {
    return http.delete(`/manager?Snumber=${Snumber}`, Snumber);
  }
}

export default new ProductDataService();
