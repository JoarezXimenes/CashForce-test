const Order = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,

  },
  {
    tableName: "orders"
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'userId'});
    Order.belongsTo(models.Cnpj, { as: 'cnpj', foreignKey: 'cnpjId'});
    Order.belongsTo(models.Buyer, { as: 'buyer', foreignKey: 'buyerId'});
    Order.belongsTo(models.Provider, { as: 'provider', foreignKey: 'providerId'});
  };

  return Order;
};

module.exports = Order;