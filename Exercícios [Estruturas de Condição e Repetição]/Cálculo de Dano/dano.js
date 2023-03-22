const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = Number.parseInt(prompt("Qual é o poder de ataque?"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = Number.parseInt(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = Number.parseInt(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - podeDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert("O atacante " + atacante + " causou " + danoCausado + " pontos de dano no defensor "  + defensor + ".")

alert(atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + defensor + "\nPontos de vida: " + pontosDeVida + "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
  )
