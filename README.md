<h1>Star Wars Galaxy API</h1>
    
   <h2>Descrição</h2>
    <p>A <strong>Star Wars Galaxy API</strong> é um projeto backend desenvolvido com Node.js e TypeScript, inspirado no universo de Star Wars. A API permite a criação, gerenciamento e visualização de elementos de uma galáxia, como planetas, sistemas estelares, personagens e naves espaciais. O projeto segue princípios RESTful e inclui autenticação com JWT para proteger as rotas que manipulam dados.</p>

  <h2>Funcionalidades</h2>
    <ul>
        <li>CRUD de Planetas</li>
        <li>CRUD de Sistemas Estelares</li>
        <li>CRUD de Personagens</li>
        <li>CRUD de Naves Espaciais</li>
        <li>Autenticação de usuários com JWT</li>
        <li>Validação e tratamento de erros</li>
        <li>Documentação com Swagger</li>
    </ul>

  <h2>Endpoints</h2>
    
   <h3>Planetas</h3>
    <ul>
        <li>POST /planets: Criar um novo planeta</li>
        <li>GET /planets: Listar todos os planetas</li>
        <li>GET /planets/:id: Obter detalhes de um planeta específico</li>
        <li>PUT /planets/:id: Atualizar informações de um planeta</li>
        <li>DELETE /planets/:id: Deletar um planeta</li>
    </ul>

  <h3>Sistemas Estelares</h3>
    <ul>
        <li>POST /star-systems: Criar um novo sistema estelar</li>
        <li>GET /star-systems: Listar todos os sistemas estelares</li>
        <li>GET /star-systems/:id: Obter detalhes de um sistema estelar específico</li>
        <li>PUT /star-systems/:id: Atualizar informações de um sistema estelar</li>
        <li>DELETE /star-systems/:id: Deletar um sistema estelar</li>
    </ul>

  <h3>Personagens</h3>
    <ul>
        <li>POST /characters: Criar um novo personagem</li>
        <li>GET /characters: Listar todos os personagens</li>
        <li>GET /characters/:id: Obter detalhes de um personagem específico</li>
        <li>PUT /characters/:id: Atualizar informações de um personagem</li>
        <li>DELETE /characters/:id: Deletar um personagem</li>
    </ul>

  <h3>Naves Espaciais</h3>
    <ul>
        <li>POST /spaceships: Criar uma nova nave espacial</li>
        <li>GET /spaceships: Listar todas as naves espaciais</li>
        <li>GET /spaceships/:id: Obter detalhes de uma nave espacial específica</li>
        <li>PUT /spaceships/:id: Atualizar informações de uma nave espacial</li>
        <li>DELETE /spaceships/:id: Deletar uma nave espacial</li>
    </ul>

   <h2>Autenticação</h2>
    <p>A autenticação é feita com <strong>JSON Web Tokens (JWT)</strong>. Apenas usuários autenticados podem criar, atualizar ou deletar dados na API.</p>

   <h3>Login</h3>
    <ul>
        <li>POST /auth/login: Autenticação do usuário. Retorna um token JWT para ser usado nas requisições.</li>
    </ul>

   <h3>Registro</h3>
    <ul>
        <li>POST /auth/register: Registrar um novo usuário.</li>
    </ul>

  <h2>Requisitos</h2>

  <h3>Pré-requisitos</h3>
    <ul>
        <li>Node.js (v16 ou superior)</li>
        <li>npm (v7 ou superior)</li>
        <li>Banco de dados MongoDB (pode ser local ou via MongoDB Atlas)</li>
    </ul>

  <h2>Dependências</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Pacote</th>
                <th>Versão</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>express</td>
                <td>^4.18.2</td>
                <td>Framework web para Node.js</td>
            </tr>
            <tr>
                <td>mongoose</td>
                <td>^7.0.0</td>
                <td>ODM para MongoDB</td>
            </tr>
            <tr>
                <td>jsonwebtoken</td>
                <td>^9.0.0</td>
                <td>Implementação de JSON Web Token (JWT)</td>
            </tr>
            <tr>
                <td>bcryptjs</td>
                <td>^2.4.3</td>
                <td>Biblioteca de criptografia para senhas</td>
            </tr>
            <tr>
                <td>swagger-jsdoc</td>
                <td>^6.0.0</td>
                <td>Gerador de especificação Swagger</td>
            </tr>
            <tr>
                <td>swagger-ui-express</td>
                <td>^5.0.0</td>
                <td>Interface do Swagger para Express</td>
            </tr>
            <tr>
                <td>morgan</td>
                <td>^1.10.0</td>
                <td>Middleware de logging HTTP para Node.js</td>
            </tr>
            <tr>
                <td>class-validator</td>
                <td>^0.14.0</td>
                <td>Validação de dados para JavaScript</td>
            </tr>
            <tr>
                <td>dotenv</td>
                <td>^16.0.0</td>
                <td>Carregador de variáveis de ambiente</td>
            </tr>
        </tbody>
    </table>

  <h2>Dependências de Desenvolvimento</h2>
    <table border="1">
        <thead>
            <tr>
                <th>Pacote</th>
                <th>Versão</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>typescript</td>
                <td>^5.0.0</td>
                <td>Suporte a TypeScript no Node.js</td>
            </tr>
            <tr>
                <td>ts-node</td>
                <td>^10.9.1</td>
                <td>Executa arquivos TypeScript diretamente</td>
            </tr>
            <tr>
                <td>jest</td>
                <td>^29.0.0</td>
                <td>Testes unitários</td>
            </tr>
            <tr>
                <td>ts-jest</td>
                <td>^29.0.0</td>
                <td>Suporte ao Jest com TypeScript</td>
            </tr>
            <tr>
                <td>nodemon</td>
                <td>^2.0.15</td>
                <td>Reinicia o servidor automaticamente</td>
            </tr>
        </tbody>
    </table>

   <h2>Instalação</h2>
    
   <h3>1. Clonar o repositório</h3>
    <pre><code>
git clone https://github.com/seu-usuario/star-wars-galaxy-api.git
cd star-wars-galaxy-api
    </code></pre>

  <h3>2. Instalar dependências</h3>
    <pre><code>
npm install
    </code></pre>

  <h3>3. Configurar variáveis de ambiente</h3>
    <p>Crie um arquivo <code>.env</code> na raiz do projeto e adicione as seguintes variáveis:</p>
    <pre><code>
MONGO_URI=mongodb://localhost:27017/star-wars-galaxy
JWT_SECRET=seu-segredo-jwt
PORT=3000
    </code></pre>
    <h3>4. Rodar o servidor</h3>
    <pre><code>
npm run dev
    </code></pre>
    <p>A API estará disponível em <code>http://localhost:3000</code>.</p>

  <h2>Testes</h2>
    <p>Para rodar os testes (opcional):</p>
    <pre><code>
npm run test
    </code></pre>

  <h2>Documentação</h2>
    <p>A documentação da API está disponível em <code>http://localhost:3000/api-docs</code> e foi gerada automaticamente com o Swagger.</p>

  <h2>Deploy</h2>
   <p>Você pode realizar o deploy da API em serviços como Heroku, AWS, ou DigitalOcean. Para deploy no Heroku, siga os passos:</p>
    <ol>
        <li>Faça login no Heroku: <code>heroku login</code></li>
        <li>Crie um novo aplicativo no Heroku: <code>heroku create</code></li>
        <li>Configure as variáveis de ambiente no Heroku: <code>heroku config:set MONGO_URI=sua-uri-do-mongo JWT_SECRET=seu-segredo</code></li>
        <li>Faça o push para o Heroku: <code>git push heroku main</code></li>
        <li>Abra o aplicativo: <code>heroku open</code></li>
    </ol>

  <h2>Contribuição</h2>
    <p>Sinta-se à vontade para contribuir com este projeto. Basta fazer um fork e enviar um pull request!</p>

   <h2>Licença</h2>
    <p>Este projeto está licenciado sob a <strong>MIT License</strong>.</p>




<h1>Star Wars Galaxy API Atualização 2.0v </h1>

<h2>Descrição</h2>
<p>A <strong>Star Wars Galaxy API</strong> é um projeto backend desenvolvido com Node.js e TypeScript, inspirado no universo de Star Wars. A API permite a criação, gerenciamento e visualização de elementos de uma galáxia, como planetas, sistemas estelares, personagens e naves espaciais. O projeto segue princípios RESTful e inclui autenticação com JWT para proteger as rotas que manipulam dados.</p>

<h2>Funcionalidades</h2>
<ul>
    <li>CRUD de Planetas</li>
    <li>CRUD de Sistemas Estelares</li>
    <li>CRUD de Personagens</li>
    <li>CRUD de Naves Espaciais</li>
    <li>Autenticação de usuários com JWT</li>
    <li>Validação e tratamento de erros</li>
    <li>Documentação com Swagger</li>
</ul>

<h2>Endpoints</h2>

<h3>Planetas</h3>
<ul>
    <li><strong>POST</strong> <code>/planets</code>: Criar um novo planeta</li>
    <li><strong>GET</strong> <code>/planets</code>: Listar todos os planetas</li>
    <li><strong>GET</strong> <code>/planets/:id</code>: Obter detalhes de um planeta específico</li>
    <li><strong>PUT</strong> <code>/planets/:id</code>: Atualizar informações de um planeta</li>
    <li><strong>DELETE</strong> <code>/planets/:id</code>: Deletar um planeta</li>
</ul>

<h3>Sistemas Estelares</h3>
<ul>
    <li><strong>POST</strong> <code>/star-systems</code>: Criar um novo sistema estelar</li>
    <li><strong>GET</strong> <code>/star-systems</code>: Listar todos os sistemas estelares</li>
    <li><strong>GET</strong> <code>/star-systems/:id</code>: Obter detalhes de um sistema estelar específico</li>
    <li><strong>PUT</strong> <code>/star-systems/:id</code>: Atualizar informações de um sistema estelar</li>
    <li><strong>DELETE</strong> <code>/star-systems/:id</code>: Deletar um sistema estelar</li>
</ul>

<h3>Personagens</h3>
<ul>
    <li><strong>POST</strong> <code>/characters</code>: Criar um novo personagem</li>
    <li><strong>GET</strong> <code>/characters</code>: Listar todos os personagens</li>
    <li><strong>GET</strong> <code>/characters/:id</code>: Obter detalhes de um personagem específico</li>
    <li><strong>PUT</strong> <code>/characters/:id</code>: Atualizar informações de um personagem</li>
    <li><strong>DELETE</strong> <code>/characters/:id</code>: Deletar um personagem</li>
</ul>

<h3>Naves Espaciais</h3>
<ul>
    <li><strong>POST</strong> <code>/spaceships</code>: Criar uma nova nave espacial</li>
    <li><strong>GET</strong> <code>/spaceships</code>: Listar todas as naves espaciais</li>
    <li><strong>GET</strong> <code>/spaceships/:id</code>: Obter detalhes de uma nave espacial específica</li>
    <li><strong>PUT</strong> <code>/spaceships/:id</code>: Atualizar informações de uma nave espacial</li>
    <li><strong>DELETE</strong> <code>/spaceships/:id</code>: Deletar uma nave espacial</li>
</ul>

<h3>Autenticação</h3>
<p>A autenticação é feita com JSON Web Tokens (JWT). Apenas usuários autenticados podem criar, atualizar ou deletar dados na API.</p>
<ul>
    <li><strong>Login</strong>: <code>POST /auth/login</code>: Autenticação do usuário. Retorna um token JWT para ser usado nas requisições.</li>
    <li><strong>Registro</strong>: <code>POST /auth/register</code>: Registrar um novo usuário.</li>
</ul>

<h2>Requisitos</h2>

<h3>Pré-requisitos</h3>
<ul>
    <li>Node.js (v16 ou superior)</li>
    <li>npm (v7 ou superior)</li>
    <li>Banco de dados MongoDB (pode ser local ou via MongoDB Atlas)</li>
</ul>

<h3>Dependências</h3>
<table>
    <tr>
        <th>Pacote</th>
        <th>Versão</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>express</td>
        <td>^4.18.2</td>
        <td>Framework web para Node.js</td>
    </tr>
    <tr>
        <td>mongoose</td>
        <td>^7.0.0</td>
        <td>ODM para MongoDB</td>
    </tr>
    <tr>
        <td>jsonwebtoken</td>
        <td>^9.0.0</td>
        <td>Implementação de JSON Web Token (JWT)</td>
    </tr>
    <tr>
        <td>bcryptjs</td>
        <td>^2.4.3</td>
        <td>Biblioteca de criptografia para senhas</td>
    </tr>
    <tr>
        <td>swagger-jsdoc</td>
        <td>^6.0.0</td>
        <td>Gerador de especificação Swagger</td>
    </tr>
    <tr>
        <td>swagger-ui-express</td>
        <td>^5.0.0</td>
        <td>Interface do Swagger para Express</td>
    </tr>
    <tr>
        <td>morgan</td>
        <td>^1.10.0</td>
        <td>Middleware de logging HTTP para Node.js</td>
    </tr>
    <tr>
        <td>class-validator</td>
        <td>^0.14.0</td>
        <td>Validação de dados para JavaScript</td>
    </tr>
    <tr>
        <td>dotenv</td>
        <td>^16.0.0</td>
        <td>Carregador de variáveis de ambiente</td>
    </tr>
</table>

<h3>Dependências de Desenvolvimento</h3>
<table>
    <tr>
        <th>Pacote</th>
        <th>Versão</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>typescript</td>
        <td>^5.0.0</td>
        <td>Suporte a TypeScript no Node.js</td>
    </tr>
    <tr>
        <td>ts-node</td>
        <td>^10.9.1</td>
        <td>Executa arquivos TypeScript diretamente</td>
    </tr>
    <tr>
        <td>jest</td>
        <td>^29.0.0</td>
        <td>Testes unitários</td>
    </tr>
    <tr>
        <td>ts-jest</td>
        <td>^29.0.0</td>
        <td>Suporte ao Jest com TypeScript</td>
    </tr>
    <tr>
        <td>nodemon</td>
        <td>^2.0.15</td>
        <td>Reinicia o servidor automaticamente</td>
    </tr>
</table>

<h2>Instalação</h2>
<ol>
    <li>Clonar o repositório
        <pre><code>git clone https://github.com/seu-usuario/star-wars-galaxy-api.git
cd star-wars-galaxy-api</code></pre>
    </li>
    <li>Instalar dependências
        <pre><code>npm install</code></pre>
    </li>
    <li>Configurar variáveis de ambiente Crie um arquivo <code>.env</code> na raiz do projeto e adicione as seguintes variáveis:
        <pre><code>MONGO_URI=mongodb://localhost:27017/star-wars-galaxy
JWT_SECRET=seu-segredo-jwt
PORT=3000</code></pre>
    </li>
    <li>Rodar o servidor
        <pre><code>npm run dev</code></pre>
        A API estará disponível em <code>http://localhost:3000</code>.
    </li>
</ol>

<h3>Testes</h3>
<p>Para rodar os testes (opcional):</p>
<pre><code>npm run test</code></pre>

<h3>Documentação</h3>
<p>A documentação da API está disponível em <code>http://localhost:3000/api-docs</code> e foi gerada automaticamente com o Swagger.</p>

<h3>Deploy</h3>
<p>Você pode realizar o deploy da API em serviços como Heroku, AWS, ou DigitalOcean. Para deploy no Heroku, siga os passos:</p>
<ol>
    <li>Faça login no Heroku: <code>heroku login</code></li>
    <li>Crie um novo aplicativo no Heroku: <code>heroku create</code></li>
    <li>Configure as variáveis de ambiente no Heroku:
        <pre><code>heroku config:set MONGO_URI=sua-uri-do-mongo JWT_SECRET=seu-segredo</code></pre>
    </li>
    <li>Faça o push para o Heroku: <code>git push heroku main</code></li>
    <li>Abra o aplicativo: <code>heroku open</code></li>
</ol>

<h2>Contribuição</h2>
<p>Sinta-se à vontade para contribuir com este projeto. Basta fazer um fork e enviar um pull request!</p>

<h2>Licença</h2>
<p>Este projeto está licenciado sob a MIT License.</p>

<h3>O que foi atualizado:</h3>
<ul>
    <li><strong>Endpoints:</strong> Foram adicionados os endpoints para personagens.</li>
    <li><strong>Autenticação:</strong> Reforçado o método de autenticação.</li>
    <li><strong>Dependências:</strong> Incluídas dependências relevantes para o projeto.</li>
    <li><strong>Estrutura:</strong> Organizado o README para fácil leitura e compreensão.</li>
</ul>
