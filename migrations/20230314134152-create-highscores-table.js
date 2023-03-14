'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('highscores', {
      highscore_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.SMALLINT
      },
      user_name: {
        allowNull: false,
        type: Sequelize.CHAR(20)
      },
      highscore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      game_mode: {
        allowNull: false,
        values: [
          'wildcard',
          'specialized',
          'custom'
        ],
        type: Sequelize.INTEGER
      },
      category: {
        allowNull: false,
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
        type: Sequelize.INTEGER
      },
      difficulty: {
        allowNull: false,
        values: [
          'random',
          'easy',
          'medium',
          'hard'
        ],
        type: Sequelize.INTEGER
      },
      limit: {
        allowNull: false,
        values: [
          10,
          20,
          30,
          40,
          50
        ],
        type: Sequelize.INTEGER
      },
      achieved_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('highscores');
  }
};