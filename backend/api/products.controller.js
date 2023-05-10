import ProductsDAO from "../dao/ProductsDAO.js";

export default class ProductsController {
  static async apiGetProducts(req, res, next) {
    const productsPerPage = req.query.productsPerPage
      ? parseInt(req.query.productsPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.name) {
      filters.name = req.query.name
    }else if(req.query.Snumber){
      filters.Snumber = req.query.Snumber
    }

    const { productsList, totalNumProducts } = await ProductsDAO.getProducts({
      filters,
      page,
      productsPerPage,
    });

    let response = {
      products: productsList,
      page: page,
      filters: filters,
      entries_per_page: productsPerPage,
      total_results: totalNumProducts,
    };
    res.json(response);
  }
}
