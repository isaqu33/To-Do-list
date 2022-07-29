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
    showButton_deleteall()
    listaTarefas.push(obj)
    // console.log(listaTarefas)
}




const adicionar = () => {


    if (input.value == "") {
        alert("Escreva uma tarefa.")
        return "";

    } else {

        construtor_tarefas()

        input.value = "";

        let tela = document.getElementById('tarefas')
        tela.innerHTML = ''
        save()

        loud()

        showButton_deleteall()

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
            <div style="color: #03113a; font-size: 1.5rem;">${tarefas.titulos}</div>

        </label>
        <button style="background-color: #6C2600;cursor: pointer;" onclick="remove_item(${tarefas.titulo})" datas-set${tarefas.indice}>x</button>
        
    `
    // element .checked = tarefa.status;

    showButton_deleteall()
    document.getElementById("tarefas").appendChild(item);



}

function limpar_tela() {
    let todolist = document.getElementById("tarefas")
    while (todolist.firstChild) {
        todolist.removeChild(todolist.lastChild)
    }
}


function mostrar() {

    if (listaTarefas.length <= 0) {

        return ''
    } else {
        limpar_tela()
        let tela = document.getElementById('tarefas')
        tela.innerHTML = ''
        listaTarefas.forEach(render)
        showButton_deleteall()

    }
}

function loud() {
    var local_storage = localStorage.getItem("dado");
    var nome = JSON.parse(local_storage)
    console.log(nome)
    showButton_deleteall()


    listaTarefas = nome;
}

function save() {

    let listastring = JSON.stringify(listaTarefas)
    // console.log(listastring)
    showButton_deleteall()
    localStorage.setItem("dado", listastring)
}


window.onload = function recarregar() {

    if (localStorage.getItem("dado") == undefined) {
        save()
    }

    loud()

    showButton_deleteall()


    mostrar()

    let exemplo = document.querySelectorAll(".tarefa")

}



function remove_item(elemento) {

    listaTarefas.splice(elemento, 1)
    save()
    loud()
    let tela = document.getElementById('tarefas')
    tela.innerHTML = ''
    showButton_deleteall()
    mostrar()

    localStorage.setItem("dado", resultado.innerHTML)

}

function resetarr() {
    let input = prompt("Digite 'sim', para remover todas as tarefas.")

    if (input == "sim") {
        localStorage.setItem("dado", "")
        var nome = localStorage.getItem("dado")
        listaTarefas = [];
        resultado.innerHTML = nome;
        showButton_deleteall()

    }


}

function showButton_deleteall() {

    const button = document.getElementById("remover_tudo")


    if (listaTarefas.length <= 2) {

        button.style.display = "none"

    }
    if (listaTarefas.length >= 2) {

        button.style.display = "flex"

    }



}