import { DataTypes } from 'sequelize';

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = sequelize => {
  sequelize.define(
    'item',
    {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      tokenAddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      itemId: {
        allowNull: false,
        type: DataTypes.NUMBER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      maxSupply: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      totalSupply: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quoteToken: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pricePerUnit: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      onSale: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      traits: {
        allowNull: false,
        defaultValue: [],
        type: DataTypes.JSONB,
      },
      data: {
        allowNull: false,
        defaultValue: {},
        type: DataTypes.JSONB,
      },
      tokenURI: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isPublished: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      indexes: [],
    }
  );
};