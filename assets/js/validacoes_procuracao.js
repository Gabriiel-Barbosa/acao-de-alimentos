
//Validações

//Procuração
const dadosProcesoMenorIncapaz = document.querySelectorAll('.dados-proceso-label-menor-incapaz');
const dadosProcesoMenorIncapazAssinatura = document.querySelectorAll('.dados-proceso-label-menor-incapaz-assinatura')

function elementoStatus(elementos, status) {
    elementos.forEach(elemento => {
      elemento.style.display = status;
    });
  }
  

//Botões da Procuração
const botaoProcuracaoSim = document.getElementById('procuracao-sim');
const botaoProcuracaoNao = document.getElementById('procuracao-nao');

//Botões do Menor Incapaz 
const botaoMenorIncapazSim = document.getElementById('menor-incapaz-sim')
const botaoMenorIncapazNao = document.getElementById('menor-incapaz-nao')
//Botões do Menor Incapaz Assinatura

const botaoMenorIncapazAssinaturaSim = document.getElementById('menor-incapaz-assinatura-sim')
const botaoMenorIncapazAssinaturaNao = document.getElementById('menor-incapaz-assinatura-nao')

// Eventos dos Botões Sim e Nãoda Procuração 
botaoProcuracaoSim.addEventListener('change', () => {
    elementoStatus(dadosProcesoMenorIncapaz,'block');
});

botaoProcuracaoNao.addEventListener('change', () => {
    alerta('Ausência de procuração que outorgue poderes de representação ao causídico que subscreve a inicial')
    elementoStatus(dadosProcesoMenorIncapaz, 'none');
    elementoStatus(dadosProcesoMenorIncapazAssinatura, 'none');

});
// Eventos dos Botões Sim e Nãoda Procuração Menor Incapaz
botaoMenorIncapazSim.addEventListener('change', () => {
    elementoStatus(dadosProcesoMenorIncapazAssinatura,'block');
});

botaoMenorIncapazNao.addEventListener('change', () => {
    elementoStatus(dadosProcesoMenorIncapazAssinatura,'none');
});

// Eventos dos Botões Sim e Não da Procuração Menor Incapaz Assinatura

botaoMenorIncapazAssinaturaNao.addEventListener('change', () => {
    alerta('Em que pese o pretenso alimentando seja relativamente incapaz, a procuração outorgada em seu nome não conta com a sua assinatura, mas apenas a da assistente.')
});





