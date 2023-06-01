import http from "../http-common";

class LoansDataService {
  getAll() {
    return http.get("/loans");
  }

  createLoan(data) {
    return http.post("/loans", data);
  }

  updateLoan(data) {
    return http.put(`/loans`, data);
  }

  deleteLoan(Snumber) {
    console.log(Snumber);

    return http.delete(`/loans?Snumber=${Snumber}`);
  }
}

export default new LoansDataService();
