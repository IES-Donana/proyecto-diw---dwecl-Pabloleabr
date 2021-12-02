//JS para la actividad del formulario

const form = document.forms[0];


//funcion generadora para crear los validar
function crearValidador(mensajeError){
    function validar(){
        if(!this.checkValidity()){
            if(this.validity.valueMissing){
                this.setCustomValidity("Debes introducir un valor");
            }
            if (this.validity.patternMismatch){
                this.setCustomValidity(mensajeError);
                }
            this.reportValidity();
        }
        borrarError();
        //al final por que si iba al principio se me quedaba el mensaje escribiendo
    }
    return validar;
}


function borrarError(){
    for(input of form){
        input.className = "";
        input.setCustomValidity("");
    }
}

var validar = crearValidador("Debe tener menos de 50 caracteres");

    //primer input el del nombre
form[0].addEventListener('focusout',validar);
form[1].addEventListener('focusout',validar);


