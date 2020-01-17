context("Signup", () => {
  beforeEach(() => {
    cy.fixture("firebase.json").as("firebase");
    cy.visit("http://localhost:7777/");
  });

  afterEach(() => {
    cy.get("@firebase").then((firebase) => {
      cy.task(
        "delete:firebaseUser",
        firebase.emailAndPasswordAuthentication.email
      );
    });
  });

  it("Should sign up a new user", () => {
    cy.findAllByText("Sign in").click();

    cy.findAllByText("Sign up").should("exist");
    cy.findAllByText("Sign up").click();

    cy.get("@firebase").then((firebase) => {
      cy.findByLabelText("Email").type(
        firebase.emailAndPasswordAuthentication.email
      );
      cy.findByLabelText("Password").type(
        firebase.emailAndPasswordAuthentication.password
      );

      cy.get("form").then((container) => {
        cy.findAllByText("Sign up", { container }).click();
      });

      cy.findAllByText(
        `Welcome ${firebase.emailAndPasswordAuthentication.email}`
      ).should("exist");

      cy.signOutWithUI(firebase.emailAndPasswordAuthentication.email);
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

        cy.findByLabelText("Email").type(
          `${firebase.emailAndPasswordAuthentication.email}{enter}`
        );

        cy.findAllByText(
          "The password is invalid or the user does not have a password."
        ).should("exist");

        cy.findByLabelText("Password").type(
          `${firebase.emailAndPasswordAuthentication.password}{enter}`
        );

        cy.signOutWithUI(firebase.emailAndPasswordAuthentication.email);
      });
    });
  });
});
