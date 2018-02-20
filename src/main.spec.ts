
describe('Saludo', () => {
  it('should render hola mundo', () => {
    expect(document.getElementById('saludo').textContent)
      .to.equal('hola mundo')
  })
})
