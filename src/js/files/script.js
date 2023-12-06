// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const LineMove = document.querySelector(".trust-brand");
if (LineMove) {
  const copyLine = document.querySelector(".trust-brand__list-1").cloneNode(true);
  document.querySelector(".trust-brand__body_01").appendChild(copyLine);

  const copyLine2 = document.querySelector(".trust-brand__list-2").cloneNode(true);
  document.querySelector(".trust-brand__body_02").appendChild(copyLine2);
}