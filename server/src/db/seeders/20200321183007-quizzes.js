"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("quizzes", [
      {
        id: 1,
        question: "What is the O(1) time complexity",
        answer1: "Quadratic",
        answer2: "Linear",
        answer3: "Logarithmic",
        answer4: "Constant",
        correctAnswer: 2,
        topic_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        question: "O(n) is the worst time complexity of",
        answer1: "Deletion form a Queue",
        answer2: "Insertion to a Stack",
        answer3: "Deletion from a Linked List",
        answer4: "Search for an Array",
        correctAnswer: 4,
        topic_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("quizzes", [{ id: 1 }, { id: 2 }], {});
  }
};
