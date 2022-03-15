let order = []//Array que vai guardar as cores sorteadas pelo jogo
let clickedOrder = []//Array que vai guardar as jogadas do usuario
let score = 0//Pontuação
let level = document.querySelector('.level')
//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

//Função que sorteia as cores que serão acesas
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//Acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    setTimeout(() => {
            element.classList.remove('selected')
        },number - 50)
    },number - 50)
}

//Checa se os botões gerados são os mesmo clicados pelo usuario
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proximo nivel`)
        nextLevel();
    }
}

//Função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    },250)
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//Função que passa para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    level.innerHTML = score
    shuffleOrder();
}

//Função que encerra o jogo
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];
    playGame()
}

//Função que inicia o jogo
let playGame = () => {
    alert("Bem-vindo ao Genius! Iniciando um novo jogo!");
    score = 0;
    nextLevel();
}

//Pegando os cliques nas cores
green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)


playGame()
