// funções para dar uma olhada: onloud, remove_item -------------------------------

var resultado = document.getElementById("tarefas")
var input = document.getElementById("input_bottom")
var check_inuts = document.querySelectorAll(".check")

var listaTarefas = [];

function construtor_tarefas() {

    var obj = {
        titulos: input.value,
        status: false,
        indice: listaTarefas.length,
    }
    listaTarefas.push(obj)
    // console.log(listaTarefas)
}




const adicionar = () => {


    if (input.value == "") {
        alert("Escreva uma tarefa.")
        return "";

    }
    else {

        construtor_tarefas()

        input.value = "";
        
        let tela = document.getElementById('tarefas')
        tela.innerHTML = ''
        save()

        loud()

        mostrar()

       

    }

}

function render(tarefas) {

    
    let item = document.createElement("div");
    item.classList.add("tarefa");
    // item.id = tarefa.titulo
    
    item.innerHTML = `
        <label class="label">

            <input type="checkbox" style="width: 50px;" id="${tarefas.titulos}" class="check" ${tarefas.status?"checked":""} datas-set${tarefas.indice}>
            <div style="color: #FCA311; font-size: 1.5rem;">${tarefas.titulos}</div>

        </label>
        <button style="background-color: #FCA311; color: black;" onclick="remove_item(${tarefas.titulo})" datas-set${tarefas.indice}>x</button>
        
    `
    // element .checked = tarefa.status;
    
    document.getElementById("tarefas").appendChild(item);

    
    
}

function limpar_tela(){
    let todolist= document.getElementById("tarefas")
    while(todolist.firstChild){
        todolist.removeChild(todolist.lastChild)
    }
}


function mostrar(){
    
    if(listaTarefas.length <= 0){
        
        return ''
    }
    else{
        limpar_tela()
        let tela = document.getElementById('tarefas')
        tela.innerHTML = ''
        listaTarefas.forEach(render)

    }
}

function loud(){
    var local_storage = localStorage.getItem("dado");
    var nome = JSON.parse(local_storage)
    console.log(nome)
   

    listaTarefas = nome;
}

function save(){

    let listastring = JSON.stringify(listaTarefas)
    // console.log(listastring)
    localStorage.setItem("dado",listastring)    
}


window.onload = function recarregar() {

    if (localStorage.getItem("dado") == undefined) {
       save()
    }

    loud()

    mostrar()

    let exemplo = document.querySelectorAll(".tarefa")
    
}



function remove_item(elemento) {



    // var index = listaTarefas.indexOf(tarefas.titulos);
    listaTarefas.splice(elemento, 1)
    save()
    loud()
    let tela = document.getElementById('tarefas')
    tela.innerHTML = ''
    mostrar()


    // // listaTarefas.forEach((tarefa, index)=>{
    // //     if( item === tarefa.titulo){
    // //         var index = listaTarefas.indexOf(tarefa.titulo)
    // //         listaTarefas.splice(index, 1)
    // //         save()
    // //         loud()
    // //         
    // //         mostrar()
    // //     }
        
    // })
    localStorage.setItem("dado", resultado.innerHTML)

}

function resetarr() {
    let input = prompt("Digite 'sim', para remover todas as tarefas.")

    if (input == "sim") {
        localStorage.setItem("dado", "")
        var nome = localStorage.getItem("dado")
        resultado.innerHTML = nome;

    }

}








