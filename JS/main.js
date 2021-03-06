//bubble background efect
function createBubble(){
    let div = document.createElement("div");
    div.className = "bubble";
    let dimesiones = Math.random().toFixed(2) * 100;
    div.style = `width: ${dimesiones}px;
                height: ${dimesiones}px;
                top: ${Math.random().toFixed(3) * document.documentElement.scrollHeight - 100}px`
    document.body.appendChild(div);
    setTimeout(()=>document.body.removeChild(div),20000);
}
setInterval(createBubble, 1000);

function cambiarContProyec(eleArray, e){
    if(/pcircles/.test(e.className)){
        let img = document.getElementById("proyectImg");
        let link = document.getElementById("plink");
        let pProyect = document.getElementById("pProyect");
        const pSource = document.getElementById("pSource")
        switch (e.getAttribute("id")) {
            case "1":
                img.src = "media/img/proyecto-1.jpeg";
                pSource.setAttribute('srcset', 'media/img/proyecto-1-sm.jpeg' );
                link.href = "https://pabloleabr.github.io/Parikiclicker/";
                pProyect.innerText = `Pariclicker es un proyecto, no terminado todavia hecho por mí y Ricardo Arana que fue hecho con el proposito de aprender y es un juegodel genero de los clickers entorno ha hacer ejercicio, que consiste en pulsar y subir tu fuerza y basico y simple pero sirvio para el aprendizaje de muchas cosas.
                Tanto este como todos los otro proyectos, te llevaran a la pagina al pulsarlos.`;
                break;
            case "2":
                img.src = "media/img/proyecto-2.jpeg";
                pSource.setAttribute('srcset', 'media/img/proyecto-2-sm.jpeg' );
                link.href = "https://pabloleabr.github.io/JS/game%20of%20life/";
                pProyect.innerText = `Conways Game of life, es una implementación del famoso \"juego\" de conway que muestra un autómata muy básico donde dibujas unos cuadraditos y se van dividiendo y multiplicando dependiendo de las condiciones.
                                    hize este proyecto con fin de acostumbrarme a javaScript pero no sabía mucho css asi que no es el mas visual en esos terminos pero sigue siendo muy entretenido de probar, asi que entra en la página dibuja algo y dale a play para ver como evoluciona. `
                break;
            case "3":
                img.src = "media/img/proyecto3.png";
                pSource.setAttribute('srcset', 'media/img/proyecto-3-sm.jpeg' );
                link.href = "https://github.com/Pabloleabr/pygame-things/tree/master/fractals";
                pProyect.innerText = `Mandlebrods fractal, esta una \"aplicación\"(esta solo en forma código) hecha con python y pygame que puede generarte en pantalla este fractal(descubierto por Mandelbrod) o crearte una imagen de la resolución que quieras, cuanto mayor resolucion mas tarda en generar pero mas adentro del fractal podras ver, en la carpeta de imágenes podras ver algunos ejemplos de los fractales que puedes generar.
                                    No es proyecto para nada terminado de refinar, pero muestra la belleza de los fractales y el uso de matemáticas complejas para generarlos, ademas de la utilidad de python hacer culquier tipo de aplicación`
                break;
        }
    }
    eleArray.forEach(ele =>{
        /*modo semi migas de pan
        ele.className = ele.className.replace(" semiActive","");
        ele.className = ele.className.replace(" active"," semiActive"); */
        ele.className = ele.className.replace(" active","");
    })
    e.className += " active";
}
//navegation circles
function addActiveDisplay(eleArray){
    eleArray.forEach(e => {
        e.addEventListener("click", () => cambiarContProyec(eleArray, e))
        e.addEventListener('keypress', (ev) =>{
            if(ev.key === "Enter"){
                cambiarContProyec(eleArray, e);
            }});

    });
}
var nav = document.querySelectorAll(".circle");
var pselect = document.querySelectorAll(".pcircles");
addActiveDisplay(nav);
addActiveDisplay(pselect);

//buton de contacto
const dialog = document.getElementById('dialog');
document.getElementById('button').addEventListener('click', () => dialog.showModal());
document.getElementById('button').addEventListener('keypress', (e) =>{
    if(e.key === "Enter"){
        dialog.showModal()
    }});
document.getElementById('cancelar').addEventListener('click', (e) =>{
    e.preventDefault();
    dialog.close();
})



