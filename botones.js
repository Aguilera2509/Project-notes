//Funcioón de Saludo
let saludo = function()
{
    nombre = prompt("Introduce tu nombre");

    if(nombre == "")
    {
        alert("Para que presionas sino vas introducir tu nombre para el saludo?");

        return nombre;
    }

    else if(nombre == null)
    {
        alert("Tienes que introducir tu nombre");

        return nombre;

    }
    
    else
    {
        alert("Hola, bienvenido, me da mucho gusto tenerte aquí conmigo, " 
        + nombre + " . Espero disfrutes dejando una nota, si quedan vacias claro esta, no sobreescribas la de otros. :D");

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
    alert("Esta opción todavía no esta configurada, y no lo estará hasta que aprenda JavaScrpit, así que como esta la familia?")
}