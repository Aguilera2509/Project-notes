//Importando Acciones de los botones
import { saludo,despedida,datos } from "./Componentes/botones.js";
//Importando Carga de las Notas de la Firebase
import { getValueNotes } from "./Componentes/getValueNotes.js";
//Importando Una Subida Rápida
import { up } from "./Componentes/scroll-top.js";


document.addEventListener("click", (e) =>{
    if(e.target.matches('#hello')) saludo();
    if(e.target.matches('#bye')) despedida();
    if(e.target.matches('#submit')) datos();
});

document.addEventListener("DOMContentLoaded", getValueNotes);

window.addEventListener("scroll", (e)=>{
    up();
});