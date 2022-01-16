const users_ctrl = require("../controller/users.controller")
module.exports = function(express) {
	const route = express.Router();

	route.get("/users",users_ctrl.getAll);
	route.get("/users/:id",users_ctrl.get);
	route.get("/users_search",users_ctrl.search);
	route.post("/users",users_ctrl.save);
	route.put("/users/:id",users_ctrl.update);
	route.delete("/users/:id",users_ctrl.delete);
		return route;
};
module.exports = self;