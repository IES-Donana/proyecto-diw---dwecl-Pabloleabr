//JS para la actividad del formulario

const form = document.forms[0];

    form[0].addEventListener('focusout',checkNombre);
    
    function checkNombre(){
        if(this.checkValidity()){
            
        }
    }