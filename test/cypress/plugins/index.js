const { deleteFirebaseUser } = require("./tasks/firebase");

module.exports = (on) => {
  on("task", {
    "delete:firebaseUser": (user) => deleteFirebaseUser(user),
  });
};
