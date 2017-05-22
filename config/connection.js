var Sequelize = require("sequelize");

var sequelize = new Sequelize("taco", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// Export connection for the ORM to use
module.exports = sequelize;