import API from "./database.js"

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
    
    //Trayendo la IP del Router del usuario
    const response = await axios.get('https://api.ipify.org?format=json');
    //console.log(response);
    const IP = response.data.ip;

    //Trayendo la UBICACION del usuario por la IP
    const zone = await fetch(`http://api.ipstack.com/${IP}?access_key=e5f02b9c7e2fbebd1ed75e8f7fc68002`),
        json = await zone.json();

    //Destructurando el elemento con las propiedades de su ZONA
    let { country_name, region_name, latitude, longitude } = json;

    
    //Enviando datos de las notas y la IP a Firebare
    API.db.collection('notas').add({
        amarillo, rojo, azul, verde, negro, azul_oscuro, gris, blanco, 
        IP, country_name, region_name, latitude, longitude
    });
    
    //Loader... Ocultar
    $svg.classList.add("none");
    
    //Mensaje de envio con exito
    swal({
        icon: 'success',
        title: 'Envio de Datos',
        text: 'Tus notas se han guardado correctamente. Se recargará en 10 segundos la página y podrás visualizar tus notas entre las demas'
    });

    setTimeout(()=>{
        window.location.reload();
    },12000);

};