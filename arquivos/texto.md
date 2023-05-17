[GUIA BÁSICO DO MARKDOWN](https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open)
Markdown Syntax é uma sintaxe usada para padronizar e facilitar formatação de texto na web, utilizada em aplicativos como Slack e GitHub. Textos estilizados com Markdown são, na maioria dos casos, apenas texto com caracteres não-alfabéticos, como #, \* e ![](), usados para a configuração de títulos, listas, itálico, negrito e inserção de imagens. O Markdown funciona como um conversor de texto para HTML: os caracteres não-alfabéticos são traduzidos como <b>, <i> e <a href>, etc. Já os textos sem formatação entram como parágrafo simples <p>.

A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo.

São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/File#implementation_notes) para mais informações.).

[Teste de retorno 400](https://httpstat.us/400).
[Teste de retorno 404](https://httpstat.us/404).


# Título

## Subtítulo
Desenvolver sua própria biblioteca é uma experiência fundamental para qualquer
desenvolvedora, pois te obriga a pensar na interface (API) dos seus módulos e
como ela será usada por outras desenvolvedoras. Você deve levar em conta as
peculiaridades da linguagem, convenções e boas práticas.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém links que podem estar
quebrados, ou que já não são válidos, prejudicando muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

[Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript
construído com o [motor de JavaScript V8 do
Chrome](https://developers.google.com/v8/). Ele vai nos permitir executar o
JavaScript no nosso sistema operacional, seja no seu computador ou em um
servidor, o que nos abre portas para poder interagir com sistemas, arquivos,
redes e etc.