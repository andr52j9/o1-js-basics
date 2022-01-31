document.querySelector("button").addEventListener("click", buttonClicked);
function buttonClicked() {
  let længde = document.querySelector("#længde").value;
  let bredde = document.querySelector("#bredde").value;
  //   let areal = længde * bredde;
  let resultat = `længde er ${længde} og bredden er ${bredde}. arealet er ${areal(
    længde,
    bredde
  )}`;
  console.log(resultat);
}

function areal(l, b) {
  return l * b;
}
