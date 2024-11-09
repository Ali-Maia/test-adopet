describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {

    cy.get('[data-test="input-loginEmail"]').type('aninha@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })

  it('Deve clicar no botão de mensagem no header e preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('aninha@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})