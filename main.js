const botes = documnt. querySelectoraII("BUTTON") 
    
botes. forEach(function) (botao) {
Let curti = false
botao. addEventlistener("click", botaoClicado);
functino botaoClicado() {
    console.log('fui clicado');
    Let texto = botao.querySelector('span');
    if (curti === false) {
        texto.textoContent++;
        curti = true;             