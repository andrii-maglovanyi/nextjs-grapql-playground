context("Quiz", () => {
  beforeEach(() => {
    cy.fixture("firebase.json").as("firebase");
    cy.visit("/p/1");
  });

  it("Should not display Quiz if User is not signed in", () => {
    cy.get("h1").findAllByText("O(1)").should("exist");
    cy.findAllByText("What is the O(1) time complexity").should("not.exist");
  });

  it("Should display Quiz for signed in user only", () => {
    cy.get("@firebase").then((firebase) => {
      const { email, password } = firebase.signin;
      cy.signInWithUI(email, password);
      cy.get("h1").findAllByText("O(1)").should("exist");
      cy.findAllByText("What is the O(1) time complexity").should("exist");

      cy.findAllByTestId("answer").should(($answers) => {
        let texts = $answers.map((_, el) => {
          console.log(Cypress.$(el).text());
          return Cypress.$(el).text();
        });

        texts = texts.get();

        console.log(texts);

        expect(texts).to.have.length(4);

        expect(texts).to.deep.eq([
          "1 Quadratic",
          "2 Linear",
          "3 Logarithmic",
          "4 Constant",
        ]);
      });
    });
  });
});
