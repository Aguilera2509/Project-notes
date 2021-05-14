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

    db.collection('notas').add({
        amarillo
    });

//GUARDADO DE LA NOTA ROJA...
    var rojo = document.getElementById('rojo').value;

    db.collection('notas').add({
        rojo
    });

//GUARDADO DE LA NOTA AZUL...
    var azul = document.getElementById('azul').value;

    db.collection('notas').add({
        azul
    });

//GUARDADO DE LA NOTA VERDE...
    var verde = document.getElementById('verde').value;

    db.collection('notas').add({
        verde
    });

//GUARDADO DE LA NOTA NEGRA...
    var negro = document.getElementById('negro').value;

    db.collection('notas').add({
        negro
    });

//GUARDADO DE LA NOTA AZUL_OSCURO...
    var azul_oscuro = document.getElementById('azul_oscuro').value;

    db.collection('notas').add({
        azul_oscuro
    });

//GUARDADO DE LA NOTA GRIS..
    var gris = document.getElementById('gris').value;

    db.collection('notas').add({
        gris
    });

 //GUARDADO DE LA NOTA BLANCA...
    var blanco = document.getElementById('blanco').value;

    db.collection('notas').add({
        blanco
    });

    alert("Su nota ha sido guardada con exito");
}