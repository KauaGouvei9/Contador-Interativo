// Iterativo do contador

// seleciona o numero
const numero = document.querySelector('#numero');

// seleciona o botao 'mais'
const btnMais = document.querySelector('#mais');

// seleciona o botao 'menos'
const btnMenos = document.querySelector('#menos');

// seleciona o botao reset
const btnReset = document.querySelector('#reset');

// seleciona o passo do controle 
const controlePasso = document.querySelector('#passo');

//seleciona o botao 'multiplica'
const btnMultiplicar = document.querySelector('#multiplicar')

// seleciona o botao 'divide'
const btnDividir = document.querySelector('#dividir')

function atualizarTela(valor){
    if(valor > 999) valor = 999;
    if(valor < -999) valor = -999;
    
    numero.textContent = valor;
    if(valor < 0){
        numero.style.color = 'red';
    }
    else if(valor > 0){
        numero.style.color = 'green'
    }
    else{
        numero.style.color = 'black'
    }
    return valor;
}


/**
 * Programa Principal
 */

let contador = 0;
atualizarTela(contador);

// Funcionalidade dos botoes

btnMais.addEventListener('click', () => {
    const valorPasso = Number(controlePasso.value);
    contador += valorPasso;
    contador = atualizarTela(contador);
})

btnMenos.addEventListener('click', () => {
    const valorPasso = Number(controlePasso.value);
    contador -= valorPasso;
    contador = atualizarTela(contador);
})

btnMultiplicar.addEventListener('click', () => {
    contador *= 2;
    contador = atualizarTela(contador);
})

btnDividir.addEventListener('click', () => {
    contador = Math.trunc(contador / 2);
    contador = atualizarTela(contador);
})

btnReset.addEventListener('click', () => {
    contador = 0;
    atualizarTela(contador);
})

