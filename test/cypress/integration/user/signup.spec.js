context("Signup", () => {
  beforeEach(() => {
    cy.fixture("firebase.json").as("firebase");
    cy.visit("/");
  });

  afterEach(() => {
    cy.get("@firebase").then((firebase) => {
      cy.task("delete:firebaseUser", firebase.signup.email);
    });
  });

  it("Should sign up a new user", () => {
    cy.findAllByText("Sign in").click();

    cy.findAllByText("Sign up").should("exist");
    cy.findAllByText("Sign up").click();

    cy.get("@firebase").then((firebase) => {
      cy.findByLabelText("Email").type(firebase.signup.email);
      cy.findByLabelText("Password").type(firebase.signup.password);

      cy.get("form").then((container) => {
        cy.findAllByText("Sign up", { container }).click();
      });

      cy.findAllByText(`Welcome ${firebase.signup.email}`).should("exist");

      cy.signOutWithUI(firebase.signup.email);
    });
  });

  it("Should require valid email", () => {
    cy.findAllByText("Sign in").click();
    cy.findAllByText("Sign up").click();

    cy.get("@firebase").then((firebase) => {
      cy.get("form").then((container) => {
        cy.findAllByText("Sign up", { container }).click();
        cy.findAllByText("The email address is badly formatted.").should(
          "exist"
        );

        cy.findByLabelText("Email").type(`${firebase.signup.email}{enter}`);

        cy.findAllByText(
          "The password is invalid or the user does not have a password."
        ).should("exist");

        cy.findByLabelText("Password").type(
          `${firebase.signup.password}{enter}`
        );

        cy.signOutWithUI(firebase.signup.email);
      });
    });
  });
});
