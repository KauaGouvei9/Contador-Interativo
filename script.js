// Iterativo do contador

// seleciona o numero
const numero = document.querySelector('#numero');

// seleciona o botao 'mais'
const btnMais = document.querySelector('#mais');

// seleciona o botao 'menos'
const btnMenos = document.querySelector('#menos');

// seleciona o botao reset
const btnReset = document.querySelector('#reset');

function atualizarTela(contador){
    numero.textContent = contador;
    if(contador < 0){
        numero.style.color = 'red';
    }
    else if(contador > 0){
        numero.style.color = 'green'
    }
    else{
        numero.style.color = 'black'
    }
        
}


/**
 * Programa Principal
 */

let contador = 0;
atualizarTela(contador);

// Funcionalidade dos botoes

btnMais.addEventListener('click', () => {
    contador++;
    atualizarTela(contador)
})

btnMenos.addEventListener('click', () => {
    contador--;
    atualizarTela(contador)
})

btnReset.addEventListener('click', () => {
    contador = 0;
    atualizarTela(contador)
})

