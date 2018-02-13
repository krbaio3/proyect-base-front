
describe('Saludo', () => {
  it('should render correct contents', () => {
    expect(document.getElementById('saludo').textContent)
      .to.equal('hola mundo')
  })
})
