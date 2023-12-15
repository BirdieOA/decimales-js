const INPUT1 = document.querySelector("#n1");
const INPUT2 = document.querySelector("#n2");

INPUT1.addEventListener("keydown", teclado);
INPUT2.addEventListener("keydown", teclado);

function teclado(e) {
  e.key === "Enter" && leer();
}

function leer() {
  const N1 = Number(INPUT1.value.trim());
  const N2 = Number(INPUT1.value.trim());
  (N1 && N2)
    ? calcular(N1, N2)
    : vaciar();
}

function calcular(valor1, valor2) {
  vaciar();
  escribir(`<h2>${valor1} * ${valor2}</h2>`);
  escribir(`<strong>Calculo original: ${valor1 * valor2}</strong>`);
  escribir(
    `<strong>Multiplicacion correcta: ${Number(
      (valor1 * valor2).toFixed(2)
    )}</strong>`
  );
  escribir(
    `<strong>Resta correcta: ${Number((valor1 - valor2).toFixed(2))}</strong>`
  );
  escribir(
    `<strong>Division correcta: ${Number(
      (valor1 / valor2).toFixed(2)
    )}</strong>`
  );
  escribir(
    `<strong>Suma correcta: ${Number((valor1 + valor2).toFixed(2))}</strong>`
  );
}

function escribir(valor) {
  reiniciar();
  document.querySelector(".resultado").innerHTML += `<div>${valor}</div>`;
}

function reiniciar() {
  INPUT1.value = "";
  INPUT2.value = "1.1";
  INPUT1.focus();
}

function vaciar() {
  document.querySelector(".resultado").innerHTML = "";
}
