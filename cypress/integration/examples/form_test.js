describe("form", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "localhost");
  });

  it("button is disabled", () => {
    cy.get("button").should("be.disabled");
  });
  it("name input", () => {
    cy.get('input[name="name"]')
      .type("adriana")
      .should("have.value", "adriana");
  });

  it("password input", () => {
    cy.get('input[name="password"]')
      .type("lalalalala")
      .should("have.value", "lalalalala");
  });

  it("email input", () => {
    cy.get('input[name="email"]')
      .type("lalala@lala.com")
      .should("have.value", "lalala@lala.com");
  });
});

it("submit button", () => {
  cy.get("button").should("not.be.disabled");
});

describe("Form validation", () => {
  it("name is required", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("This is a required field").should("not.exist");
    cy.get('input[name="name"]').type("la");
    cy.contains("Must be at least 3 characters long").should("exist");
    cy.get('input[name="name"]').type("la");
    cy.contains("Must be at least 3 characters long").should("not.exist");
  });
});
