import "@testing-library/cypress/add-commands";

Cypress.Commands.add("signInWithUI", (email, password) => {
  cy.findAllByText("Sign in").click();
  cy.findByLabelText("Email").type(email);
  cy.findByLabelText("Password").type(password);
  cy.get("form").then((container) => {
    cy.findByText("Sign in", { container }).click();
  });
});

Cypress.Commands.add("signIn", (email, password) => {
  cy.findByLabelText("Email").type(email);
  cy.findByLabelText("Password").type(password);
  cy.get("form").then((container) => {
    cy.findByText("Sign in", { container }).click();
  });
});

Cypress.Commands.add("signOutWithUI", (email) => {
  cy.get("header").then((container) => {
    cy.findByText(email, {
      container,
    }).click({ force: true });
  });
});
