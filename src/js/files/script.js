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

    document.addEventListener('DOMContentLoaded', function () {
        var casesLinks = document.querySelectorAll('.cases__link');
        casesLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                casesLinks.forEach(function (otherLink) {
                    otherLink.classList.remove('active');
                });
                // Add the 'active' class to the clicked link
                link.classList.add('active');
            });
        });
    });
