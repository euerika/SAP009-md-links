const mdLinks = require('../mdLinks.js');
// const fs = require('fs');

describe('mdLinks', () => {

  it('Devera devolver uma promisse', () => {
    const resultado = mdLinks('README.md')
    expect(resultado instanceof Promise).toBe(true)
  });

  it('Devera devolver o caso de erro', () => {
    const resultado = mdLinks('./arquivos/teste')
    expect(resultado instanceof Promise).toBe(false)
  });

 });
