const palavra = prompt ("Informe uma palavra: ")

let palavraInvertida = "" // Vamos armazenar essa variável para ser utilizada ao final


for (let i = palavra.length - 1; i >= 0; i --){
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
}  else {
    alert(palavra + " não é um palíndromo! \n\n " + palavra + " !== " + palavraInvertida)
}

