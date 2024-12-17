describe('Api Adopet', () => {
  it ('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/e7aeaa35-a81e-43ae-a553-3eff12cd39a8',
      headers: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
    })
  })
})