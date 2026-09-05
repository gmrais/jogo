// ============================================================
// CÓDIGO DO LIGHTBOX "LojaPartida"
// Cole no painel de código DESTE lightbox.
//
// IMPORTANTE: o embed HTML dentro do lightbox precisa se chamar #htmlLojaPartida
// ============================================================

import wixWindow from "wix-window";

$w.onReady(function () {
  $w("#htmlLojaPartida").onMessage((event) => {
    const data = event.data;
    if (data && data.type === "fecharLojaPartida") {
      wixWindow.lightbox.close();
    }
  });
});