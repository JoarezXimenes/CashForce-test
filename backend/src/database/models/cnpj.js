const Cnpj = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define("Cnpj", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "cnpjs"
  });

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Order, { as: 'orders', foreignKey: 'cnpjId' });
  };

  return Cnpj;
};

module.exports = Cnpj;