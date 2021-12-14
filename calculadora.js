let areaCalc = document.getElementById("pAreaCalc");
let conta;

function inserir(valor) {
  let areaCalc = document.getElementById("pAreaCalc").innerHTML;

  areaCalc = areaCalc + valor;
  conta = areaCalc;
  document.getElementById("pAreaCalc").innerHTML = areaCalc;
}

function apagar() {
  let areaCalc = document.getElementById("pAreaCalc");

  areaCalc = "";
  conta = "";
  document.getElementById("pAreaCalc").innerHTML = areaCalc;
}

function calcular() {
  let areaCalc = document.getElementById("pAreaCalc");

  if (areaCalc) {
    conta = eval(conta);
    document.getElementById("pAreaCalc").innerHTML = conta;
  }
}
