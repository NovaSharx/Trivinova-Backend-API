'use strict';
const {
  Model
} = require('sequelize');
const { CHAR, DATE } = require('sequelize-cockroachdb');
module.exports = (sequelize, DataTypes) => {
  class Highscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Highscore.belongsTo(User, { foreignKey: 'highscore_id', as: 'highscores' })
    }
  }
  Highscore.init({
    highscoreId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.SMALLINT
    },
    user_name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameMode: {
      type: DataTypes.ENUM,
      values: [
        'wildcard',
        'specialized',
        'custom'
      ],
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM,
      values: [
        'random',
        'arts_and_literature',
        'film_and_tv',
        'food_and_drink',
        'general_knowledge',
        'geography',
        'history',
        'music',
        'science',
        'society_and_culture',
        'sport_and_leisure'
      ],
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: [
        'random',
        'easy',
        'medium',
        'hard'
      ],
      allowNull: false
    },
    limit: {
      type: DataTypes.ENUM,
      values: [
        10,
        20,
        30,
        40,
        50
      ],
      allowNull: false
    },
    achievedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Highscore',
  });
  return Highscore;
};