function copiar(elemento) {
    // Criar a função para copiar o texto ao clicar
    navigator.clipboard.writeText(elemento.innerHTML);
    var valoranterior = elemento.innerHTML;
    var coratual = elemento.style.backgroundColor;
    console.log(elemento.innerHTML)
    elemento.innerHTML = 'copiado';
    elemento.style.backgroundColor = "red";
    elemento.style.color = "white";
    setTimeout(() => {
        elemento.innerHTML = valoranterior;
        elemento.style.backgroundColor = coratual;
    }, 500);
};
let inputzao = document.querySelector('input#colarinicial');
let botao = document.querySelector('div.box');
inputzao.addEventListener('input', function(){
    if (inputzao.value !== 'CopySite') {
        botao.setAttribute('disabled', 'disabled');
        botao.removeAttribute('placeholder');
        botao.setAttribute('placeholder', 'Novo texto do placeholder');
    } else {
        botao.removeAttribute('disabled');
    }
});