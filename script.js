
let tarefas = [] //criacao de lista vazia  

function adicionarTarefa(){
    //buscando o input 
    const inputTarefa = document.getElementById("inputTarefa")
    //pegamos o valor do input e colocamos na variavel tarefa 
    //trim retira os espaços em branco no inicio e no fim do texto
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if(tarefa == ""){
        let mensagemErro = "Digite uma tarefa p/ add a sua lista"
        mensagem.textContent = mensagemErro
       // mensagem.style.color = 'red'
    }else {   
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        //mensagem.style.color='#00FF00'
        tarefas.push(tarefa)
        renderizarTarefas()
    }

    //limpa o input
    inputTarefa.value = ""
 }

function renderizarTarefas(){
    //criando  a lista dentro da ul no html a partir do id
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    
    for (let i=0; i < tarefas.length;i++){
        //criando li
        let novaTarefa = document.createElement("li")
        //o valor que está em tarefa vai pra novaTarefa
        novaTarefa.textContent = tarefas[i]

        let botaoRemover = document.createElement("button")
        novaTarefa.appendChild(botaoRemover)
        botaoRemover.className='remover'
        botaoRemover.textContent='Remover'
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = 'editar'
        botaoEditar.textContent = 'Editar'
        botaoEditar.onclick = () => editarTarefa(i)



        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa)
    }
}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefas()
}

function editarTarefa(i){
   let tarefaEditada =  prompt("Edite a tarefa:")
   if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()

   }

}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de Tarefas Limpa com Sucesso!"

}