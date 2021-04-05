function calculo () {
  var n1 = document.getElementById("caixa1").value;
  var n2 = document.getElementById("caixa2").value;

  if (document.getElementById("operacao").value == "Soma") {
    var n3 = parseInt(n1) + parseInt(n2);
  }

   if (document.getElementById("operacao").value == "Subtrair") {
    var n3 = parseInt(n1) - parseInt(n2);
  }

   if (document.getElementById("operacao").value == "Multiplicar") {
    var n3 = parseInt(n1) * parseInt(n2);
  }

   if (document.getElementById("operacao").value == "Dividir") {
    var n3 = parseInt(n1) / parseInt(n2);
  }

  alert("O resultado de sua operação é: "+ n3)
}
