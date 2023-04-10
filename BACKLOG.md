# Backlog

## Backlog do Produto

Histórias que ainda serão refinadas e desenvolvidas nas próximas sprints do projeto.

- Como usuário, eu gostaria de visualizar o perfil de outros jogadores.
- Como usuário, eu gostaria aprovar pedidos de partida.
- Como usuário, eu gostaria de receber notificações em tempo real sobre pedidos de partida ou de amizade.
- Como usuário, eu gostaria de filtrar de maneira mais elaborada os convites disponíveis.
- Como usuário, eu gostaria de poder comentar no convite de outro jogador.
- Como usuário, eu gostaria de poder bloquear um usuário.
- Como usuário, eu gostaria de acessar a plataforma através do navegador em meu celular.
- Como usuário, eu gostaria de enviar e aceitar pedidos de amizade.
- Como usuário, eu gostaria de trocar mensagens com meus amigos.
- Como usuário, eu gostaria de receber recomendações de convites direcionadas para as minhas preferências de jogo.
- Como usuário, eu gostaria de ter acesso a uma seção onde possa esclarecer minhas principais dúvidas sobre a plataforma (FAQ).
- Como usuário, eu gostaria de poder compartilhar um convite em redes sociais.
- Como usuário, eu gostaria de poder dar um feedback/report de bugs na plataforma.

## Backlog da Sprint

Histórias que já foram detalhadas e devem ser desenvolvidas ao longo da sprint atual.

- Tarefas técnicas (não atreladas a nenhuma história).

  - Criar projeto NodeJS e instalar/configurar os pacotes necessários. [Vinicius e Matheus]
  - Criar projeto React e instalar/configurar os pacotes necessários. [Vinicius e Matheus]
  - Pesquisar alternativas para hospedagem do frontend, backend e banco de dados. [Vinicius]
  - Definir a versão e a distribuição do SQL. [Vinicius e Matheus]
  - Protótipo de telas da aplicação no Figma. [Mirna]

- Como usuário, eu gostaria de me cadastrar na plataforma.

  - Criar o modelo de usuário no servidor/banco de dados. [Vinicius]
  - Criar rota para inserção de dados de cadastro no banco. [Vinicius]
  - Validar as informações enviadas ao servidor. [Vinicius]
  - Criar tela de cadastro. [Mirna]
  - Validar os campos de cadastro. [Mirna]
  - Integrar a interface com as respectivas rotas no servidor. [Mirna]
  - Criar e emitir um toast (notificação) de erro caso a requisição falhe ou de sucesso caso tudo ocorra corretamente. [Mirna]

- Como usuário, eu gostaria de me autenticar na plataforma.

  - Criar rota para autenticar um usuário. [Vinicius]
  - Validar as informações de login enviadas ao servidor. [Vinicius]
  - Criar rota para buscar dados de um usuário autenticado. [Vinicius]
  - Criar tela de login. [Mirna]
  - Validar os campos de cadastro. [Mirna]
  - Integrar a interface com as respectivas rotas no servidor. [Mirna]
  - Emitir um toast (notificação) de erro caso a requisição falhe. [Mirna]
  - Persistir o usuário autenticado no navegador. [Vinicius]
  - Caso o usuário esteja autenticado, buscar dados os dados dele assim que a página for carregada. [Vinicius]
  - Atualizar a interface para mostrar o usuário autenticado. [Mirna]

- Como usuário, eu gostaria de atualizar o meu perfil.

  - Criar rota para atualização das informações de usuário no banco. [Vinicius]
  - Validar as informações enviadas pelo usuário ao servidor. [Vinicius]
  - Criar tela de atualização de perfil. [Mirna]
  - Validar os campos de atualização de perfil. [Mirna]
  - Integrar a interface com as respectivas rotas no servidor. [Mirna]
  - Emitir um toast (notificação) de erro caso a atualização falhe ou de sucesso caso tudo ocorra corretamente. [Mirna]
  - Atualizar a interface para mostrar os dados atualizados do usuário. [Mirna]

- Como usuário, eu gostaria de publicar convites para jogar com outros jogadores.

  - Criar o modelo de convite no servidor/banco de dados. [Matheus]
  - Criar rota para inserção de dados do convite no banco. [Matheus]
  - Criar rota para exclusão de um convite no banco. [Matheus]
  - Validar os dados do convite e/ou ID do convite que foram enviados ao servidor. [Matheus]
  - Criar tela de publicação de convite. [Átila]
  - Validar os campos de publicação de convite. [Átila]
  - Integrar a interface com as respectivas rotas no servidor. [Átila]
  - Emitir um toast (notificação) de erro caso a requisição falhe ou de sucesso caso tudo ocorra corretamente. [Átila]

- Como usuário, eu gostaria de visualizar os convites que já foram publicados.
  - Criar rota para a listagem de convites de partidas (sem filtro). [Matheus]
  - Adaptar a rota de listagem de convites de partidas para que seja possível filtrar convites por jogo. [Matheus]
  - Criar barra de navegação da aplicação. [Átila]
  - Criar header da página principal. [Átila]
  - Criar tela de listagem de convites. [Átila]
  - Criar tela de listagem de convites filtradas por jogo. [Átila]
  - Exibir mensagem caso a lista de convites esteja vazia. [Átila]

---

Para gerenciamento das tarefas ao longo da sprint, será utilizado o board do GitHub Projects como principal ferramenta de organização e gerenciamento. O board do projeto pode ser encontrado [nesse link](https://github.com/users/vazleal/projects/1).
