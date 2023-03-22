const numero = prompt("Olá, eu sou o robo da tabuada!" + "\n" + "Informe o número desejado: ")
  
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
    resultado += "->" + numero + " * " + fator + " = " + (numero * fator) + "\n" // Esse resultado += funciona como concatenação.
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)