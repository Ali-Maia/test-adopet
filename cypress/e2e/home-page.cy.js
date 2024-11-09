describe('Testes na Página principal', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('deve verificar o título da página', () => {
    cy.title().should('eq', 'AdoPet');
  })

  it('deve verificar se contem a mensagem "Quem ama adota!"', () => {
    cy.contains('Quem ama adota!').should('be.visible');
  })

  it('deve verificar se contem a mensagem "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })
})