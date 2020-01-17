"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "subjects",
      [
        {
          name: "Big O",
          description:
            "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is a member of a family of notations invented by Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation.",
          type: "bigO",
          degree: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Array",
          description:
            "In computer science, an array data structure, or simply an array, is a data structure consisting of a collection of elements, each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical formula.",
          type: "array",
          degree: "4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Stack",
          description:
            "In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed.",
          type: "stack",
          degree: "5",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("subjects", [
      { name: "Big O" },
      { name: "Array" },
      { name: "Stack" }
    ]);
  }
};
