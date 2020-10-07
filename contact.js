const titre = document.querySelector("#fusee");
titre.style.position = "absolute";
let topPos = 5800;
let dir = -1;

function hautBas() {
  if (topPos == -800) {
    topPos = 5800;
    dir = -1;
  }
  topPos += 12 * dir;
  titre.style.top = `${topPos}px`;
  requestAnimationFrame(hautBas);
}

requestAnimationFrame(hautBas);

("use strict");
const btnAides = document.querySelectorAll(".form-submit");
btnAides.forEach(function (btnAide) {
  btnAide.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("titre");
  });
});
