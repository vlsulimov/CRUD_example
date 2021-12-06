'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('userRole', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      userId: {
        type: Sequelize.BIGINT,
        references: {
            model: 'user',
            key: 'id',
        },
      },
      roleId: {
        type: Sequelize.BIGINT,
        references: {
            model: 'role',
            key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('userRole');
  },
};
