let escuroFundo = document.getElementById("escuro")
let claro = document.getElementById("claro")
let container = document.getElementsByClassName("container")
let main = document.getElementsByTagName("main")
let a = document.querySelectorAll("a")
let contatoP = document.getElementsByClassName("contatoP")
let divContato = document.getElementsByClassName("divContato")

let contatoWhats = document.getElementsByClassName("contatoWhats")
let linkedin = document.getElementById("linkedin")
let email = document.getElementsByClassName("email")
let meuDiscord = document.getElementsByClassName("meuDiscord")

escuroFundo.addEventListener("click", clicar)
claro.addEventListener("click", clicar2)
/*Aqui eu criei duas funções, o clicar e o clicar2 ambos servem para deixar a página no modo claro ou escuro. */
function clicar(){
    document.body.style.backgroundColor = "#2a2a2a"
    container[0].style.backgroundColor = "#454545"
    main[0].style.border = "#2c2c2c solid 10px"
    a[0].style.background = "#8d01b8"
    a[1].style.background = "#8d01b8"
    a[2].style.background = "#8d01b8"
    a[3].style.background = "#8d01b8"
    a[0].style.border = "#78009c 4px solid"
    a[1].style.border = "#78009c 4px solid"
    a[2].style.border = "#78009c 4px solid"
    a[3].style.border = "#78009c 4px solid"
    contatoP[0].style.border = "#2c2c2c solid 10px"
    contatoP[1].style.border = "#2c2c2c solid 10px"
    contatoP[2].style.border = "#2c2c2c solid 10px"
    contatoP[3].style.border = "#2c2c2c solid 10px"
    divContato[0].style.background = "#454545"
    divContato[1].style.background = "#454545"
    divContato[2].style.background = "#454545"
    divContato[3].style.background = "#454545"
}

function clicar2(){
    document.body.style.backgroundColor = "rgb(50, 68, 121)"
    container[0].style.backgroundColor = "rgb(60, 79, 136)"
    main[0].style.border = "solid 10px rgb(53, 71, 126)"
    a[0].style.background = "#7BC47F"
    a[1].style.background = "#7BC47F"
    a[2].style.background = "#7BC47F"
    a[3].style.background = "#7BC47F"
    a[0].style.border = "#4A8F50 4px solid"
    a[1].style.border = "#4A8F50 4px solid"
    a[2].style.border = "#4A8F50 4px solid"
    a[3].style.border = "#4A8F50 4px solid"
    contatoP[0].style.border = "solid rgb(53, 71, 126) 10px"
    contatoP[1].style.border = "solid rgb(53, 71, 126) 10px"
    contatoP[2].style.border = "solid rgb(53, 71, 126) 10px"
    contatoP[3].style.border = "solid rgb(53, 71, 126) 10px"
    divContato[0].style.background = "rgb(60, 79, 136)"
    divContato[1].style.background = "rgb(60, 79, 136)"
    divContato[2].style.background = "rgb(60, 79, 136)"
    divContato[3].style.background = "rgb(60, 79, 136)"
}

/*Aqui eu criei uma validação para enviar uma mensagem para o meu e-mail. */

let mensagem = document.getElementById("mensagem")
let enviarMensagem = document.getElementById("enviarMensagem")

/*Aqui eu criei uma função anonima, não vi necessidade de criar uma função normal, pois ela só será usada para esse caso em especifico.*/
enviarMensagem.addEventListener("click", () => {
    /*Aqui eu criei uma  verificador de mensagem, caso a caixa de texto fique vazia, ele emite um alerta avisando para o usuário adicionar algum valor.
    Caso o usuário tenha escrito algo, ele envia de forma normal*/
    if(mensagem.value){
        console.log("Mensagem enviada com sucesso" + mensagem.value)
        window.alert("mensagem enviada")
    } else{
        window.alert("Favor insira algum valor na caixa de texto!")
    }
})

/*Aqui eu criei uma animação para a parte dos contato toda vez que clicamos, ele vai mostrar número de telefone, whats, discord e linkedin */

contatoWhats[0].addEventListener("click", () => {
    contatoWhats[0].innerHTML = "Número de telefone: (47) 9 9238-2247"
})

contatoWhats[0].addEventListener("mouseleave", () => {
    contatoWhats[0].innerHTML = "Número de whats e telefone, clique aqui!"
})

linkedin.addEventListener("click", () => {
    linkedin.innerHTML = "<a href = https://br.linkedin.com/in/mateus-gil-tavares-74568b203> Acessar Linkedin</a>"
})

linkedin.addEventListener("mouseleave", () => {
    linkedin.innerHTML = "Clique aqui para acessar o linkedin"
})

email[0].addEventListener("click", () => {
    email[0].style = "font-size: 10px;"
    email[0].innerHTML = "giltavaresmateus@gmail.com"
})

email[0].addEventListener("mouseleave", () => {
    email[0].style = "font-size: 14px;"
    email[0].innerHTML = "Clique aqui para acessar o meu e-mail"
})

meuDiscord[0].addEventListener("click", () => {
    meuDiscord[0].innerHTML = "Discord: AutisticGrimgow"
})

meuDiscord[0].addEventListener("mouseleave", () => {
    meuDiscord[0].innerHTML = "Discord"
})
