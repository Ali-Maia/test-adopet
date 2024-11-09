describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.login('aninha@email.com','Senha123');
  })

  it('Deve clicar no botão de mensagem no header e preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.get('.header__message').click();
    cy.login('aninha@email.com','Senha123');
  })
})