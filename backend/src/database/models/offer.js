const Offer = (sequelize, DataTypes) => {
  const Offer = sequelize.define("Offer", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.INTEGER,
    paymentStatusProvider: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER,
  },
  {
    tableName: "offers"
  });

  return Offer;
};

module.exports = Offer;