// ============================================================
// CÓDIGO DO LIGHTBOX "UpgradesPartida"
// Cole no painel de código DESTE lightbox.
//
// IMPORTANTE: o embed HTML dentro do lightbox precisa se chamar #htmlUpgradesPartida
// ============================================================

import wixWindow from "wix-window";

$w.onReady(function () {
  $w("#htmlUpgradesPartida").onMessage((event) => {
    const data = event.data;
    if (data && data.type === "fecharUpgradesPartida") {
      wixWindow.lightbox.close();
    }
  });
});