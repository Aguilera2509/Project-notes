//Funcioón de Saludo
let saludo = function()
{
    nombre = prompt("Introduce tu nombre");

    if(nombre == "")
    {
        alert("Yo tenia ganas de saludarte. :c");

        return nombre;
    }

    else if(nombre == null)
    {
        alert("Por que no introduciste tu nombre? :c");

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
    var amarillo = document.getElementById('amarillo').value;
    // Repetir con todos los demas wacho

    db.collection('notas').add({
        amarillo,
    });

    var rojo = document.getElementById('rojo').value;

    db.collection('notas').add({
        rojo,
    });

    alert("Su nota ha sido guardada con exito");
}