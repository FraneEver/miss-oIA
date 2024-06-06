const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como vocẽ e sente ao acordar toda manhã",
        alternativas: [
            {
                texto: "Bom humor",
                afirmacao: "afirmacao"
            },

            {
                texto: "Mau humor",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "como vocẽ se sente ao ver pessoas mais 'bem sucedidas' que você?",
        alternativas:
            [
                {
                    texto: "Inspirado",
                    afirmacao: "afirmacao"
                },

                {
                    texto: "Inveja",
                    afirmacao: "afirmacao"
                }
            ]
    },
    {
        enunciado: "Duranteo dia, você tem um monento pessoal, autocuidado, por exemplo?",
        alternativas: [
            
            {
                texto: "Quase sempre",
                afirmacao: "afirmacao"
            },

            {
                texto: "Não tenho esse hábito",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Você tem preferência por sair, encontrar outras pessoas, socializar?",
        alternativas: [

            {
                texto: "Em ocasiões especiais",
                afirmacao: "afirmacao"
            },

            {
                texto: "Dificilmente",
                afirmacao: "afirmacao"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
