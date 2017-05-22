module.exports = function(sequelize, DataTypes) {
  var Taco = sequelize.define("Taco", {
    taco_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    time_created: DataTypes.DATE
  },
{
  timestamps: false
});
  console.log(`typeof ${Taco}`);
  return Taco;
};