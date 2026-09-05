// ============================================================
// CÓDIGO DO LIGHTBOX "FinalDeDia"
// Cole no painel de código DESTE lightbox (não é o mesmo da página principal).
//
// IMPORTANTE: o embed HTML dentro do lightbox precisa se chamar #htmlFinalDeDia
// ============================================================

import wixWindow from "wix-window";

$w.onReady(function () {
  $w("#htmlFinalDeDia").onMessage((event) => {
    const data = event.data;
    if (data && data.type === "abrirLojaPartida") {
      wixWindow.lightbox.close();
      wixWindow.openLightbox("LojaPartida");
    }
  });
});