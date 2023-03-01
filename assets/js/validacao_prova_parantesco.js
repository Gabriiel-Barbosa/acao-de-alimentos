const dadosProcessoRelacaoParentesco= document.querySelectorAll('.proceso-label-relacao-parentesco"')

const botaoParentescoSim = document.getElementById('parentesco-sim');
const botaoParentescoNao = document.getElementById('parentesco-nao');

botaoParentescoSim.addEventListener('change', ()=>{
    alerta('Considerando que o pedido deduzido na inicial tem por fundamento a relação de parentesco entre as partes, observo que a falta da prova desta circunstância por documento público impede a continuidade do processo por ausência de documento essencial')
})