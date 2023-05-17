const fs = require('fs');
const chalk = require('chalk');
const fetch = require('node-fetch');
 //vai retornar um promessa se resolver ou rejeitar 
function mdlinks(pathFile, options = {}) {
  return new Promise((resolve, reject) => {
    const arqExiste = fs.existsSync(pathFile);
    // se for diferente de arquivo existente rejeite
    if(!arqExiste) {
      reject(chalk.magenta('\u2764') + '' + `O arquivo: ${chalk.magenta(pathFile)} não existe.`);
    } else {
        fs.readFile(pathFile, 'utf-8', (err, data) => {
          if(err){
            reject(err);
          } else {
            const linkRegex =/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
            const procurarLinks = data.match(linkRegex)
            const linksEncontrados = procurarLinks.map(link => {
              const removerLink = link.replace(/.$/, '').replace('[', '');
              const dividir = removerLink.split('](');
              const novoObjeto = {
                href: dividir[1],
                text: dividir[0],
                file: pathFile,
              };
              return novoObjeto;
            });
            if(options.validate) {
              const promises = linksEncontrados.map(element => fetch(element));
              Promise.all(promises)
                .then(linkArray =>{
                    resolve(linkArray)
                })
                .catch(error =>{
                  reject(error)
                });
              }else{
                resolve(linksEncontrados)
              }
            }
        });
        }
    });
}
module.exports = mdlinks;