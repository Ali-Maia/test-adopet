describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlN2FlYWEzNS1hODFlLTQzYWUtYTU1My0zZWZmMTJjZDM5YTgiLCJhZG9wdGVyTmFtZSI6IkFuaW5oYSBEaWFzIiwiaWF0IjoxNzMxNTIxNzIwLCJleHAiOjE3MzE3ODA5MjB9.UPguObyGzlPXhJkc5a6Ax1lFnwJNeVKlH8gT80fEBFw`

  it ('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/e7aeaa35-a81e-43ae-a553-3eff12cd39a8',
      headers: {authorization},
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property('msg');
    })
  })
})