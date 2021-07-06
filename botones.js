//Función de Saludo
let saludo = function()
{
    nombre = prompt("Introduce tu nombre");

    if(nombre === "" || nombre === " " || nombre === "  " || nombre === "   ")
    {
        
        swal({
            icon:'warning',
            title:'Oops...',
            text:'No introdujo nombre, ¿Por que?'
        });

        return nombre;
    }

    else if(nombre === null)
    {
        swal({
            icon:'info',
            title:'Esta bien',
            text:'Si no quieres saludo, no hay problema :,c'
        });

        return nombre;
    }
    
    else
    {
        swal({
            icon: 'success',
            title: 'Bienvenido',
            text: `Hola ${nombre}, me da mucho gusto tenerte aquí conmigo. Espero disfrutes dejando notas, eres libre de poner lo que quieras : D`
        });

        return nombre;
    }
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
let datos = function()
{

//GUARDADO DE TODAS LAS NOTAS....
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

    swal({
        icon: 'success',
        title: 'Envio de Datos',
        text: 'Tus notas se han guardado correctamente'
    });
}