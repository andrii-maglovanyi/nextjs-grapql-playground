"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.renameColumn("subjects", "type", "kind"),
      queryInterface.renameColumn("subjects", "description", "instruction")
    ]),

  down: (queryInterface, Sequelize) =>
    Promise.all([
      (queryInterface.renameColumn("subjects", "kind", "type"),
      queryInterface.renameColumn("subjects", "instruction", "description"))
    ])
};
