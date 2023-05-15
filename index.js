//  é uma biblioteca nativa do node
const fs = require ('fs');

// serve para estilizar o texto no console
const chalk = require ('chalk');

//const path = require ('path');

fs.readFile('./arquivos/texto.md', 'utf8', function(err, data) {
  if(err)
      console.log(err);
  else
      console.log(data);
});

// const arquivosPath = 'arquivos/texto.md';

// fs.readFile(arquivosPath, 'utf-8', function(err, data) {
//   if (err) throw err;
//   const extension = path.extname(arquivosPath);
//   console.log(`O arquivo ${chalk.magenta.bgMagenta.bold(arquivosPath)} tem a extensão ${chalk.magenta('\u2717') + chalk.magenta.underline(extension)}`);
// });