# Trabalho final PTAS
 
Descrição: O projeto em questão se trata de um fake-site para procurar informações sobre livros, pode servir também como uma API FakeStore.

Como Inicializar o Servidor Passo a Passo: 
1- Instale a pasta TRABALHO-FINAL-PTAS no github de seu incrível e maravilhoso criador Skolpion-MK.

2- Instale as dependências/módulos necessários com o seguinte comando no console: npm i.

3- Inicie o projeto com o nodemon através do seguinte comando no console: npm run dev.

4- Clique no Link gerado no console, ou digite no navegador de sua preferência a seguinte URL: http://localhost:3000

AVISOS: Através do navegador é um pouco complexo de se testar outros métodos de requisições HTTP além do GET, portanto recomendo usar o aplicativo Insomnia para tal coisa.

-------------------------------------==---------------------------------


Atualmente a única rota disponível é a raiz( / ), porém o site possui dinamização de rotas através do uso de parametros

alguns exemplos de métodos são

GET - Ele pode ser usado tanto direto na raiz: localhost:3000, o que retornará uma lista com todos os livros, como também pode ser usado com parametros: localhost:3000/n(ID de algum livro disponível na Database), o que retornará o livro com esse id.

POST - Esse método é utilizado para o cadastro de um novo livro na Database, precisando de necessariamente um corpo(Body) contendo as informações necessárias para o cadastro.

PUT - Esse metódo precisa tanto de um id no parâmetro da rota, quanto um corpo com todas as informações a serem alteradas, se ocorrer de faltar alguma informação ele não vai alterar ela no cadastro original.

DELETE - Assim como o próprio nome indica esse método serve para remover livros da lista, precisando de seu ID para ocorrer a remoção.