/**
 * En el main tambien use en su momento los metodos de crear elemento el el dom para
 * generar las burbujas por si se quiere ver pero no sabia sobre los metodos para
 * la manipulacion de classes ni atributos.
/

/**
 * coge un elemento y una referencia y te inserta links n forma de circulos
 * @return void
 */
function addLink(element, href){
    let a = document.createElement('a');
    a.setAttribute('href', href);
    let div = document.createElement('div');
    div.classList.add('circle');
    a.appendChild(div);
    element.appendChild(a);
}

/**
 * cambia las classes de los menus de navegacion para aparezca y desaparezca
 * @returns void
 */
function toggleMenu() {
    if(this.classList.contains('is-active')){
        //tengo que hacerlo por separado en cada caso para que se muestres
        //la animacion de salida en este caso y la de entrada en el else
        navlist.classList.toggle('is_active');
        setTimeout(()=>navlist.remove(),1000);
    }
    else{
        menu.insertAdjacentElement('afterbegin', navlist);
        //le pongo un dealay muy chico para por que si no aparece ya en el lado del tiron
        setTimeout(()=>navlist.classList.toggle("is_active"), 10);

    }
  this.classList.toggle('is-active');
}

var menu = document.querySelector('#hamburguesa');

//añadimos la funcion al evento click del menu hamburguesa
menu.addEventListener('click', toggleMenu);

//creo el nav y añado todos sus elementos hijos
let navlist = document.createElement('div');
navlist.classList.add('sidenav');
addLink(navlist, '#');
addLink(navlist, '#proyectos');
addLink(navlist, '#testimonios');
addLink(navlist, '#estudios');
addLink(navlist, '#mas');


