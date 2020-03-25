/**
 * Firebase Admin module requires GOOGLE_APPLICATION_CREDENTIALS global variable to be set
 * with a path to the service account file.
 */
process.env.GOOGLE_APPLICATION_CREDENTIALS = "../certs/serviceAccountKey.json";

const admin = require("../../../../server/src/services/firebase-admin");

const deleteFirebaseUser = (email) =>
  admin
    .auth()
    .getUserByEmail(email)
    .catch((error) => console.log("Error fetching user data:", error))
    .then((userRecord) => admin.auth().deleteUser(userRecord.uid))
    .then(() => {
      console.log("Successfully deleted user");
      return true;
    })
    .catch((error) => {
      console.log("Error deleting user:", error);
      return false;
    });

module.exports = { deleteFirebaseUser };
