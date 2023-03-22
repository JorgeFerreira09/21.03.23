const array = []
let opcao = ""

do {
    let pacientes = ""
    for (let i = 0; i < array.length; i++) {
        pacientes += (i + 1) + " ª - " + array[i] + "\n"
   }

   opcao = prompt("Pacientes:\n" + pacientes + "\n" + "Escolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair")

   switch (opcao) {
       case "1":
        const novoPaciente = prompt("Qual é o nome do paciente?")
        array.push(novoPaciente)
        break
        
       case "2":
        const pacienteConsultado = array.shift()
        if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
       } else {
           alert(pacienteConsultado + " foi removido da fila.")
          }
          break
        
       case "3":
         alert("Encerrando...")
         break
       default:
         alert("Opção inválida!")
         break
    }

    } while (opcao !== "3");