const dadosProcessoPedidoNomeProprio= document.querySelectorAll('.proceso-label-pedido-nome-proprio')

const botaoLegitimidadeSim = document.getElementById('legitimidade-sim');
const botaoLegitimidadeNao = document.getElementById('legitimidade-nao');

botaoLegitimidadeSim.addEventListener('change', ()=>{
    alerta('Não obstante ajuíze a ação em nome próprio, a parte requerente apresenta pedido relacionado ao seu filho, situação que envolve aparente ilegitimidade ativa e potencial falha de capacidade postulatória')
})