$w.onReady(function () {

  // ==============================
  // CONFIGURAÇÃO
  // ==============================
  const salas = {
    balcao: "#salabalcao",
    estoque: "#salaestoque",
    cozinha: "#salacozinha"
  };

  let salaAtual = "balcao"; // sala que começa aberta
  let emTransicao = false;

  const fadeOptions = {
    duration: 400,
    delay: 0
  };

  // ==============================
  // FUNÇÃO PRINCIPAL
  // ==============================
  async function irPara(destino) {
    if (emTransicao || destino === salaAtual) return;

    emTransicao = true;

    // 1. Fica 100% preto
    await $w("#overlayPreto").show("fade", fadeOptions);

    // 2. Troca as salas (enquanto está preto)
    $w(salas.balcao).hide();
    $w(salas.estoque).hide();
    $w(salas.cozinha).hide();

    $w(salas[destino]).show();
    salaAtual = destino;

    // 3. Tira o preto
    await $w("#overlayPreto").hide("fade", fadeOptions);

    emTransicao = false;
  }

  // ==============================
  // BOTÕES - COLOQUE OS IDs CORRETOS AQUI
  // ==============================

  // Exemplo (substitua pelos IDs reais dos seus botões):
  
  $w("#botaoBalcao").onClick(() => irPara("balcao"));
  $w("#botaoEstoque").onClick(() => irPara("estoque"));
  $w("#botaoCozinha").onClick(() => irPara("cozinha"));

  // Se tiver mais botões, continue adicionando assim:
  // $w("#ID_DO_SEU_BOTAO").onClick(() => irPara("cozinha"));
  // $w("#outroBotao").onClick(() => irPara("balcao"));

});$w.onReady(function () {

  // ==============================
  // CONFIGURAÇÃO
  // ==============================
  const salas = {
    balcao: "#salabalcao",
    estoque: "#salaestoque",
    cozinha: "#salacozinha"
  };

  let salaAtual = "balcao"; // sala que começa aberta
  let emTransicao = false;

  const fadeOptions = {
    duration: 400,
    delay: 0
  };

  // ==============================
  // FUNÇÃO PRINCIPAL
  // ==============================
  async function irPara(destino) {
    if (emTransicao || destino === salaAtual) return;

    emTransicao = true;

    // 1. Fica 100% preto
    await $w("#overlayPreto").show("fade", fadeOptions);

    // 2. Troca as salas (enquanto está preto)
    $w(salas.balcao).hide();
    $w(salas.estoque).hide();
    $w(salas.cozinha).hide();

    $w(salas[destino]).show();
    salaAtual = destino;

    // 3. Tira o preto
    await $w("#overlayPreto").hide("fade", fadeOptions);

    emTransicao = false;
  }

  // ==============================
  // BOTÕES - COLOQUE OS IDs CORRETOS AQUI
  // ==============================

  // Exemplo (substitua pelos IDs reais dos seus botões):
  
  $w("#botaoBalcao").onClick(() => irPara("balcao"));
  $w("#botaoEstoque").onClick(() => irPara("estoque"));
  $w("#botaoCozinha").onClick(() => irPara("cozinha"));

  // Se tiver mais botões, continue adicionando assim:
  // $w("#ID_DO_SEU_BOTAO").onClick(() => irPara("cozinha"));
  // $w("#outroBotao").onClick(() => irPara("balcao"));

});