module.exports = function(sequelize, DataTypes) {
  var Taco = sequelize.define("Taco", {
    taco_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  console.log(`typeof ${Taco}`);
  return Taco;
};