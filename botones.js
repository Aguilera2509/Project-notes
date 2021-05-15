//Funcioón de Saludo
let saludo = function()
{
    nombre = prompt("Introduce tu nombre");

    if(nombre == "")
    {
        alert("Por que no introduciste tu nombre? :c");

        return nombre;
    }

    else if(nombre == null)
    {
        alert("Yo tenia ganas de saludarte. :c");

        return nombre;
    }
    
    else
    {
        alert("Hola, bienvenido, me da mucho gusto tenerte aquí conmigo, " 
        + nombre + ". Espero disfrutes dejando una nota en cual color prefieras, eres libre de poner cualquier cosa. :D");

        return nombre;
    }
}

//Función de Despedida
let despedida = function()
{
    alert("Fue un gusto que visitarás mi primera página, espero que tengas un buen día. :D");
}

//Función de Envio de Datos

let datos = function()
{

//GUARDADO DE LA NOTA AMARILLA...
    var amarillo = document.getElementById('amarillo').value;
    var rojo = document.getElementById('rojo').value;
    var azul = document.getElementById('azul').value;
    var verde = document.getElementById('verde').value;
    var negro = document.getElementById('negro').value;
    var azul_oscuro = document.getElementById('azul_oscuro').value;
    var gris = document.getElementById('gris').value;
    var blanco = document.getElementById('blanco').value;

    db.collection('notas').add({
        amarillo, rojo, azul, verde, negro, azul_oscuro, gris, blanco
    });

    alert("Su nota ha sido guardada con exito");
}