//Quitação de Custas
//Custas Quitadas ?
const dadosProcessoQuitacaoCustas = document.querySelectorAll('.dados-proceso-label-quitacao-custas')

//Custas Quitadas Parciamente ?
const dadosProcessoDadosQuitadasParcialmente = document.querySelectorAll('.dados-proceso-label-quitadas-parcialmente')

//Pedido de Gratuidade da Justiça
const dadosProcessoDadosPedidoGratuidadeJustica = document.querySelectorAll('.proceso-label-gratuidade-justica')

//Pobreza Presumida
const dadosProcessoDadosPobrezaPresumida = document.querySelectorAll('.proceso-label-pobreza-presumida')

// Não Quitada e Nem Pede Gratuidade
const dadosProcessoDadosNquitadaNgratuidade = document.querySelectorAll('.proceso-label-nquitada-ngratuidade')

//Botões de Custas Quitadas Sim e Não
const botaoQuitadasSim = document.getElementById('quitadas-sim');
const botaoQuitadasNao = document.getElementById('quitadas-nao');

//Botões de Custas Quitadas Sim e Não Parcialmente 

const botaoQuitadasParcialmenteSim = document.getElementById('quitadas-parcialmente-sim');
const botaoQuitadasParcialmenteNao = document.getElementById('quitadas-parcialmente-nao');

//Botoes Pedido de Gratuidade da Justiça

const botaoGratuidadeJusticaSim = document.getElementById('gratuidade-sim');
const botaoGratuidadeJusticaNao = document.getElementById('gratuidade-nao');

//Botoes Pobreza Presumida

const botaoPobrezaPresumidaSim= document.getElementById('pobreza-presumida-sim');
const botaoPobrezaPresumidaNao = document.getElementById('pobreza-presumida-nao');

//Eventos Custas Quitadas 
botaoQuitadasSim.addEventListener('change', () => {
    elementoStatus(dadosProcessoDadosQuitadasParcialmente,'none');
    elementoStatus(dadosProcessoDadosPedidoGratuidadeJustica,'none');
    elementoStatus(dadosProcessoDadosPobrezaPresumida,'none');
    elementoStatus(dadosProcessoDadosNquitadaNgratuidade,'none');

});
dadosProcessoDadosPedidoGratuidadeJustica
botaoQuitadasNao.addEventListener('change', () => {
    elementoStatus(dadosProcessoDadosQuitadasParcialmente,'block');
});

//Eventos Custas Quitdas Parcialmente
botaoQuitadasParcialmenteSim.addEventListener('change', () => {
    alerta('Apesar de terem sido juntados comprovantes de pagamento de custas, não consta do feito a prova da quitação de todas as taxas devidas ante os termos do pedido')
    elementoStatus(dadosProcessoDadosPedidoGratuidadeJustica, 'none')
    elementoStatus(dadosProcessoDadosPobrezaPresumida,'none')
    elementoStatus(dadosProcessoDadosNquitadaNgratuidade,'none')
})
botaoQuitadasParcialmenteNao.addEventListener('change', () => {
   
    elementoStatus(dadosProcessoDadosPedidoGratuidadeJustica, 'block')
})

//Eventos Pedido de Gratuidade Justica

botaoGratuidadeJusticaSim.addEventListener('change',()=>{
    elementoStatus(dadosProcessoDadosPobrezaPresumida,'block')
    elementoStatus(dadosProcessoDadosNquitadaNgratuidade,'none')
})
botaoGratuidadeJusticaNao.addEventListener('change',()=>{
    alerta('Não obstante não conste da petição inicial qualquer pedido de gratuidade da justiça, deixou o requerente de comprovar a quitação das custas de ajuizamento da ação')
    elementoStatus(dadosProcessoDadosPobrezaPresumida,'none')
    elementoStatus(dadosProcessoDadosNquitadaNgratuidade,'block')
})
//Eventos Pobreza Presumida 
botaoPobrezaPresumidaSim.addEventListener('change',()=>{
    elementoStatus(dadosProcessoDadosNquitadaNgratuidade,'none')
})

botaoPobrezaPresumidaNao.addEventListener('change',()=>{
    alerta('Requer o autor a concessão dos benefícios da gratuidade da justiça, alegando não ter condições financeiras para arcar com o pagamento das custas processuais, sem prejuízo do seu próprio sustento.O artigo 5º, LXXIV, da Constituição Federal estabelece que o Estado preste assistência jurídica integral e gratuita aos que comprovarem insuficiência de recursos. Por sua vez, o atual código de processo civil torna presumível a incapacidade financeira alegada pela pessoa física. Ainda assim, havendo elementos que indiquem a possibilidade de arcar o interessado com o custo do processo, é possível o indeferimento do benefício.')})


    //Eventos Pedido de Não quitada e Nao Gratuidade

