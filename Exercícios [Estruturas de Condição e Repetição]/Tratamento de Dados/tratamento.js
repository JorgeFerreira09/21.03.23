let n1 = Number.parseInt(window.prompt("Insira um valor")) 
let n2 = Number.parseInt(window.prompt("Insira outro valor:")) 
let soma = n1 + n2
window.alert("A soma dos valores é: " + soma) //concatenação 

/*
Window.prompt irá retornar uma string, mesmo quando colocamos um número.

Para ser uma adição precisa number + number.

É preciso converter por meio do comando:

Number.parseInt(n)
        ou
Number.parseFloat(n)
*/ 

