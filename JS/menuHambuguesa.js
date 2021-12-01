var menu = document.querySelector('#hamburguesa');

/**
 * cambia las classes de los menus de navegacion para aparezca y desaparezca
 * @returns void
 */
function toggleMenu () {
  this.classList.toggle('is-active');
  document.querySelector( "#sidenav" ).classList.toggle("is_active");
}

//añadimos la funcion al evento click del menu hamburguesa
menu.addEventListener('click', toggleMenu);