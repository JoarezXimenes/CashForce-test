// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/');
    cy.contains('p', 'Visualize as notas fiscais que você tem.');
    cy.contains('button', 'Dados do cedente');
  });
});
