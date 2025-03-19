document.addEventListener("DOMContentLoaded", function() {
    // Capturar o botão de mudança de cor
    const botao = document.getElementById("meuBotao");

    botao.addEventListener("click", function() {
        const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = corAleatoria;
    });

    // Capturar elementos do input e botão de envio
    const botaoEnviar = document.getElementById("botaoEnviar");
    const inputTexto = document.getElementById("meuInput");
    const mensagem = document.getElementById("mensagem");

    botaoEnviar.addEventListener("click", function() {
        const textoDigitado = inputTexto.value;
        
        if (textoDigitado.trim() !== "") {
            mensagem.textContent = "Você digitou: " + textoDigitado;
            inputTexto.value = ""; // Limpa o campo após o envio
        } else {
            mensagem.textContent = "Por favor, digite algo!";
        }
    });

    // Capturar elementos do contador
    let contadorCliques = 0;
    const botaoContador = document.getElementById("botaoContador");
    const contadorTexto = document.getElementById("contador");

    // Adicionar evento de clique para contar cliques
    botaoContador.addEventListener("click", function() {
        contadorCliques++;
        contadorTexto.textContent = "Cliques: " + contadorCliques;
    });

    // Temporizador: contar tempo na página
let segundos = 0;
const temporizadorTexto = document.getElementById("temporizador");

// Função que atualiza o tempo a cada segundo
setInterval(function() {
    segundos++;
    temporizadorTexto.textContent = segundos + " segundos";
}, 1000);

});

// Temporizador regressivo: começa em 10 segundos
let tempoRestante = 10;
const temporizadorRegressivoTexto = document.getElementById("temporizadorRegressivo");
const botaoReiniciar = document.getElementById("reiniciarTemporizador");

let temporizadorRegressivo = iniciarTemporizadorRegressivo(); // Iniciar o temporizador assim que a página carregar

// Função para iniciar a contagem regressiva
function iniciarTemporizadorRegressivo() {
    return setInterval(function() {
        if (tempoRestante > 0) {
            temporizadorRegressivoTexto.textContent = tempoRestante + " segundos";
            tempoRestante--;
        } else {
            temporizadorRegressivoTexto.textContent = "Tempo esgotado!";
            clearInterval(temporizadorRegressivo);
        }
    }, 1000);
}

// Evento para reiniciar a contagem quando o botão for clicado
botaoReiniciar.addEventListener("click", function() {
    clearInterval(temporizadorRegressivo); // Parar a contagem atual
    tempoRestante = 10; // Reiniciar o tempo
    temporizadorRegressivoTexto.textContent = "10 segundos";
    temporizadorRegressivo = iniciarTemporizadorRegressivo(); // Iniciar novamente
});




