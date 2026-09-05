// ============================================================
// CÓDIGO DA PÁGINA PRINCIPAL (onde está o widget "dia-timer.html")
// Cole isso no painel de código da página (Page Code).
//
// IMPORTANTE: o elemento de "Incorporar HTML" que tem o dia-timer.html
// precisa se chamar exatamente #htmlDiaTimer no Editor do Wix
// (ou troque o ID abaixo pelo que você usou).
// ============================================================

import wixWindow from "wix-window";

$w.onReady(function () {
  $w("#htmlDiaTimer").onMessage((event) => {
    const data = event.data;
    if (data && data.type === "abrirFinalDeDia") {
      wixWindow.openLightbox("FinalDeDia");
    }
  });

  // IMPORTANTE: o embed HTML do pedido.html precisa se chamar #htmlPedido
  $w("#htmlPedido").onMessage((event) => {
    const data = event.data;
    if (data && data.type === "abrirUpgradesPartida") {
      wixWindow.openLightbox("UpgradesPartida");
    }
  });
});