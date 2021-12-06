'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dateNow = new Date();

    await queryInterface.bulkInsert(
      'role',
      [
        {
          id: 1,
          alias: 'admin',
          name: 'Администратор',
          createdAt: dateNow,
        },
        {
          id: 2,
          alias: 'worker',
          name: 'Сотрудник',
          createdAt: dateNow,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('room', null, {});
  },
};
