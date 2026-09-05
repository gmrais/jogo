import { run as scriptA } from "public/Mecanicas";
import { run as scriptB } from "public/MudarSala";

$w.onReady(async function () {
  await Promise.all([
    scriptA(),
    scriptB()
  ]);
});