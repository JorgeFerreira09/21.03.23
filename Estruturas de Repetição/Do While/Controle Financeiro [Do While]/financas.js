let saldo = parseFloat(prompt("Insira a quantia inicial em dinheiro: "))
let opcao = ""

do { opcao = prompt("Saldo disponível em R$ " + saldo + "\n1. Adicionar dinheiro" + "\n2. Remover dinheiro" + "\n3. Sair")
    
    switch (opcao) {
        case "1":
        saldo += parseFloat(prompt("Informe o valor a ser adicionado: "))
        break
        
        case "2":
        saldo += parseFloat(prompt("Informe o valor a ser adicionado: "))
        break
        
        case "3":
        alert("Saindo...")
        break   

        default:
        alert("Entrada Invalida!")
    }
} while (opcao !== "3") 