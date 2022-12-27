const Orderportion = (sequelize, DataTypes) => {
  const Orderportion = sequelize.define("Orderportion", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
  },
  {
    tableName: "orderportions"
  });

  return Orderportion;
};

module.exports = Orderportion;