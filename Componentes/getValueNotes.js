import API from "./database.js"

export async function getValueNotes(){
    
    const $template = document.getElementById("contenido").content,
        $fragment = document.createDocumentFragment(),
        $ver_contenido = document.querySelector(".ver-contenido"),
        $svg_getNotes = document.getElementById("svg-getnotes");

    $svg_getNotes.classList.remove("none");

    try {
        const collection = await API.db.collection("notas").get();
        
        collection.forEach(doc => {
            //console.log(doc.data())

            $template.getElementById("amarillo").textContent = doc.data().amarillo;
            $template.getElementById("rojo").textContent = doc.data().rojo;
            $template.getElementById("azul").textContent = doc.data().azul;
            $template.getElementById("verde").textContent = doc.data().verde;
            $template.getElementById("negro").textContent = doc.data().negro;
            $template.getElementById("azul_oscuro").textContent = doc.data().azul_oscuro;
            $template.getElementById("gris").textContent = doc.data().gris;
            $template.getElementById("blanco").textContent = doc.data().blanco;

            let $clone = $template.cloneNode(true);
        
            $fragment.appendChild($clone);
        });
    } catch (err) {
        swal({
            icon:'error',
            title:`ERROR`,
            text:'Ha ocurrido un error al cargar las notas de las demas personas'
        })
    }
    
    //Loader de cargando contenido de las notas
    $svg_getNotes.classList.add("none");

    //Agregando las notas al DOM para que todos las vean
    $ver_contenido.append($fragment);
};