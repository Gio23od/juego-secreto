
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosR = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos ===1) ? 'vez' : 'Veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número es menor');
        }
        else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosR);
    //Sí ya sorteamos todos los numeros
    if(listaNumerosR.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles!');
    } else {

        //Sí el numero generado está incluido en la lista
        if (listaNumerosR.includes(numeroGenerado)){
            return numeroAleatorio();
        } else {
            listaNumerosR.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del N° secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    //1
    limpiarCaja();
    //2
    condicionesIniciales();
    //3
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();