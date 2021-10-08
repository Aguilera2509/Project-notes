//Función de Saludo
let saludo = function()
{
    swal({
        text: 'Ingresa tu nombre',
        content: "input",
        button: {
            text: "¡Confirmar!"
        } 
    }).then(name =>{
        //console.log(name)
        if(/^ *$/.test(name)){
            swal({
                icon:'warning',
                title:'Oops...',
                text:'No introdujo nombre, ¿Por que?'
            });
    
            return name;
        }
        
        else{
            swal({
                icon: 'success',
                title: 'Bienvenido',
                text: `Hola ${name}, me da mucho gusto tenerte aquí conmigo. Espero disfrutes dejando notas, eres libre de poner lo que quieras : D`
            });
    
            return name;
        }
    })
}

//Función de Despedida
let despedida = function()
{
    swal({
        icon: 'success',
        title: 'Despedida',
        text: 'Me gusto mucho que pasarás por aquí, espero tengas un buen día, y gracias : D'
    });
}

//Función de Envio de Datos
let datos = async function()
{
    const $svg = document.querySelector("#svg");

    $svg.classList.remove("none");

//GUARDADO DE TODAS LAS NOTAS....
    var amarillo = document.getElementById('amarillo').value;
    var rojo = document.getElementById('rojo').value;
    var azul = document.getElementById('azul').value;
    var verde = document.getElementById('verde').value;
    var negro = document.getElementById('negro').value;
    var azul_oscuro = document.getElementById('azul_oscuro').value;
    var gris = document.getElementById('gris').value;
    var blanco = document.getElementById('blanco').value;

    const response = await axios.get('https://api.ipify.org?format=json');
    //console.log(response);
    const IP = response.data.ip;

    db.collection('notas').add({
        amarillo, rojo, azul, verde, negro, azul_oscuro, gris, blanco, IP
    });

    $svg.classList.add("none");

    swal({
        icon: 'success',
        title: 'Envio de Datos',
        text: 'Tus notas se han guardado correctamente'
    });
}

document.addEventListener("DOMContentLoaded", async (e)=>{

    const $template = document.getElementById("contenido").content,
        $fragment = document.createDocumentFragment(),
        $ver_contenido = document.querySelector(".ver-contenido");

    const collection = await db.collection("notas").get();

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

    $ver_contenido.append($fragment);
})