import API from "./database.js"
import { getValueNotes } from "./getValueNotes.js";

//Exportando Función de Saludo
export function saludo(){
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
                text: `Hola ${name}, me da mucho gusto tenerte aquí conmigo. Espero disfrutes dejando notas, eres libre de poner lo que quieras.`
            });
        
            return name;
        }
    })
};



//Exportando Función de Despedida
export function despedida(){
    swal({
        icon: 'success',
        title: 'Despedida',
        text: 'Me gusto mucho que pasarás por aquí, espero tengas un buen día y gracias.'
    });
};



//Exportando Función de Envio del valor de las notas y IP del usuario a Firebase
export async function datos(){
    //Loader... Mostrar cuando se esta cargando la información de las otras notas
    const $svg = document.querySelector("#svg");
    $svg.classList.remove("none");
    
    //Trayendo los valores de los textarea
    var amarillo = document.getElementById('amarillo').value;
    var rojo = document.getElementById('rojo').value;
    var azul = document.getElementById('azul').value;
    var verde = document.getElementById('verde').value;
    var negro = document.getElementById('negro').value;
    var azul_oscuro = document.getElementById('azul_oscuro').value;
    var gris = document.getElementById('gris').value;
    var blanco = document.getElementById('blanco').value;
    
    /*Try-Catch para capturar el error de las Async-await.
    Solo Mostrará un error simple y sencillo realizado por mi, nada en especial o especifico.
    Solo para hacerle saber al usuario que algo salio mal y ya.*/
    try {
        //No localiza precisamente al usuario pero si da un GRAN área de dónde puede estar
        //Existen APIs más precisas pero se pagan para usar sus buenos protocolos o precision
        const place = await fetch(`https://api.ipdata.co/?api-key=4cd6b4d7cdd3b2225e02814e2399febbf7476b78be4bba5853d0952a`),
            json = await place.json();

        let { calling_code, country_name, country_code, latitude, longitude, ip } =  json;
        //console.log(json);
        
        //Enviando datos de las notas y la IP a Firebare
        API.db.collection('notas').add({
            amarillo, rojo, azul, verde, negro, azul_oscuro, gris, blanco,
            calling_code, country_name, country_code, latitude, longitude, ip
        });

    } catch (err) {
        swal({
            icon:'error',
            title:'ERROR',
            text:'Ha ocurrido un error al enviar datos, favor de volver a intentar'
        })
    };
    
    //Loader... Ocultar
    $svg.classList.add("none");
    
    //Mensaje de envio con exito
    await swal({
        icon: 'success',
        title: 'Envio de Datos',
        text: 'Tus notas se han guardado correctamente. Se recarga la página busca tus notas entre las demas'
    });

    window.location.reload();
};