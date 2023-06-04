import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  createProd(data) {
    return http.post("/manager", data);
  }

  updateProd(data) {
    return http.put(`/manager`, data);
  }

  deleteProd(Snumber) {
    console.log(Snumber);
    return http.delete(`/manager?Snumber=${Snumber}`);
  }
}

export default new ProductDataService();
