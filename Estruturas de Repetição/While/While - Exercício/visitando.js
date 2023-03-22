const turista = prompt("Olá, insira o seu nome: ")

let cidades = ""
let contagem = 0

let visita = prompt("Você já visitou alguma cidade? (Sim/Não)")

while (visita === "Sim") {
    let cidade = prompt("Qual o nome da cidade que você visitou? ")
    // cidades = cidades + ...
    cidades += " - " + cidade + "\n"
    contagem++
    // x += 
    // x = x + x
    // ++ Incremento
    visita = prompt ("Você visitou alguma outra cidade? (Sim/Não)")
}

alert ("Turista:  " + turista + "\n "+ "Cidades visitadas: " + "\n" + cidades + "\n" + "Quantidade de cidades visitadas foram: " + contagem)