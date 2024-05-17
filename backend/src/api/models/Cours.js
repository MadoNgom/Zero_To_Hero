const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const Cours = sequelize.define(
  "Cours",
  {
    idCours: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nomCours: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    duree: {
      type: DataTypes.DATE,
    },
    estPayant: {
      type: DataTypes.BOOLEAN,
    },
    prixCours: {
      type: DataTypes.FLOAT,
    },
    contenu: {
      type: DataTypes.TEXT,
    },
    niveauDifficulte: {
      type: DataTypes.ENUM("BEGINNER", "INTERMEDIATE", "ADVANCED"),
    },
  },
  {
    tableName: "cours",
    timestamps: false,
  }
);

module.exports = Cours;
