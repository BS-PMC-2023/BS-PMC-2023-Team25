import UsersDAO from "../dao/UsersDAO.js";

export default class UsersController {
   static async apiGetUsers(req, res, next) {
    const usersPerPage = req.query.usersPerPage
      ? parseInt(req.query.usersPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.email) {
      filters.email = req.query.email
    }

    const { usersList, totalNumUsers } = await UsersDAO.getUsers({
      filters,
      page,
      usersPerPage,
    });

    let response = {
      users: usersList,
      page: page,
      filters: filters,
      entries_per_page: usersPerPage,
      total_results: totalNumUsers,
    };
    res.json(response);
  }
  
  static async apiPostUser(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email);

      const UsersResponse = await UsersDAO.addUser(email, password);
      console.log(UsersResponse);

      var { error } = UsersResponse;
      if (error) {
        res.status(400).json({ error });
      } else {
        res.json({ status: "success" });
      }
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const UsersResponse = await UsersDAO.updateUser(email, password);
      console.log(UsersResponse);
      var { error } = UsersResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (UsersResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update prod - user may not be original poster"
        );
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteUser(req, res, next) {
    try {
      const email = req.query.email;
      const UsersResponse = await UsersDAO.deleteUser(email); //MODIFIED FROM SOURCE FILES
      var { error } = UsersResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (UsersResponse.deletedCount === 0) {
        throw new Error(
          "unable to delete user - this user does not exist or user_id not correspond to request creator"
        );
      } else {
        res.json({ status: "sucess!!" });
      }
    } catch (e) {
      console.log(e);
      res.json({ error: e.message }).status(500);
    }
  }
}
