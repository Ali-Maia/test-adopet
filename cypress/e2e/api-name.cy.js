describe('Api Adopet', () => {

  it ('Nome do perfil', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/e7aeaa35-a81e-43ae-a553-3eff12cd39a8',
      headers: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('perfil');
      expect(res.body.perfil.nome).to.be.equal('Aninha Dias');
    })
  })
})