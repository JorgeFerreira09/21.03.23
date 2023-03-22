const medida = prompt("Insire a medida em metros (m):")

const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1. milimetros(mm)"  +
    "\n2. centimetros(cm)" +
    "\n3. decimetros(dm)" +
    "\n4. decâmetros(dam)" +
    "\n5. hectômetros(hm)" +
    "\n6. quilometros(km)" 
)

switch (unidade) {
    case "1":
        alert("Resultado é: " + medida + "m = " + medida + 1000 + "mm")
        break
    case "2":
        alert("Resultado é: " + medida + "m = " + medida + 100 + "cm") 
        break
    case "3":
        alert("Resultado é: " + medida + "m = " + medida + 10 + "dm")
        break
    case "4":
        alert("Resultado é: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado é: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6":
        alert("Resultado é: " + medida + "m = " + medida / 1000 + "km")
    default :
        alert("Opção invalida")
}