"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "topics",
      [
        {
          name: "O(1)",
          description:
            "O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.",
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "O(n)",
          description:
            "O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set. The example below also demonstrates how Big O favours the worst-case performance scenario; a matching string could be found during any iteration of the for loop and the function would return early, but Big O notation will always assume the upper limit where the algorithm will perform the maximum number of iterations.",
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "O(n2)",
          description:
            "O(N2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N3), O(N4) etc.",
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "O(2n)",
          description:
            "O(2N) denotes an algorithm whose growth doubles with each addition to the input data set. The growth curve of an O(2N) function is exponential - starting off very shallow, then rising meteorically. An example of an O(2N) function is the recursive calculation of Fibonacci numbers",
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "O(log n)",
          description:
            "Binary search is a technique used to search sorted data sets. It works by selecting the middle element of the data set, essentially the median, and compares it against a target value. If the values match it will return success. If the target value is higher than the value of the probe element it will take the upper half of the data set and perform the same operation against it. Likewise, if the target value is lower than the value of the probe element it will perform the operation against the lower half. It will continue to halve the data set with each iteration until the value has been found or until it can no longer split the data set.",
          subject_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "topics",
      [
        { name: "O(1)" },
        { name: "O(n)" },
        { name: "O(n2)" },
        { name: "O(2n)" },
        { name: "O(log n)" }
      ],
      {}
    );
  }
};
