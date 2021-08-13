'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'role',
      [
        {
          id: 1,
          alias: 'admin',
          name: 'Администратор',
        },
        {
          id: 2,
          alias: 'worker',
          name: 'Сотрудник',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('room', null, {});
  },
};
