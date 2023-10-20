function calculateGastoComb(){
      var precoCombustivel = document.getElementById("precoCombustivel").value;
      var gastoMedioKm = document.getElementById("gastoMedioKm").value;
                  var distanciaKm = document.getElementById("distanciaKm").value;
     var gastoPorLitros = (distanciaKm / gastoMedioKm) * precoCombustivel;
console.log(precoCombustivel);
console.log(gastoMedioKm);
console.log(distanciaKm);
console.log(gastoPorLitros);
gastoPorLitros = gastoPorLitros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
document.getElementById("resultado").innerText = "Valor Gasto em Combustível:" + gastoPorLitros;

    }
