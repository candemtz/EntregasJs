alert("Bienvenido al sistema!A continuacion podra ingresar su usuario y contraseña, tiene 5 intentos");

const usuarioRegistrado = 'accesocoder';
const claveRegistrado = 'entregauno';
let ingresoExitoso = "";
let listo = "";
let montoTotal = 0;
let mensaje = " ";
let cantAccesos = 0;

while (ingresoExitoso != "S"){
    let usuarioAcceso = prompt("Ingrese su usuario");
    let claveAcceso = prompt("Ingrese su contraseña");
    const ingreso = iniciarSesion(usuarioAcceso,claveAcceso,listo);
    ingresoExitoso = ingreso;
}

function iniciarSesion(usuarioAcceso,claveAcceso,listo){
    if ((usuarioAcceso === usuarioRegistrado) && (claveAcceso === claveRegistrado)){
        alert("Ingreso Exitoso! Bienvenido al sistema");
        listo = "S";
        console.log(listo);
        return listo; 
    }else if((usuarioAcceso != usuarioRegistrado) || (claveAcceso != claveRegistrado)){
        listo = "N";
        cantAccesos = cantAccesos + 1;
        alert("Usuario o contreña incorrectos, reingrese. Intento numero "+ cantAccesos);
        if (cantAccesos === 5){
            alert("Supero la cantidad maxima de intentos.Contactese con soporte, soporteempresa@gmail.com-Adios!");
            listo = "N";
        }     
    }
                
}


let cantPersonas = parseInt(prompt("Por favor ingrese la cantidad de personas que pusieron dinero(maximo 5)"));
let totalCompra = parseInt(prompt("Por favor ingrese el total de la compra"));
    for(let i = 0;i < cantPersonas; i++){
        let persona1 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto1 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona1 + ":"));
        calculaDivision(totalCompra,cantPersonas,persona1,monto1,i)
    }  
alert("Resultados Finales: \n"+ mensaje); 


function calculaDivision(totalCompra,cantPersonas,persona,monto,i){
    let cantIndividual = totalCompra / cantPersonas;
    if (monto > cantIndividual){
        let cantPago = monto - cantIndividual
        mensaje = mensaje +"Deben pagarle: "+ cantPago + " a " + persona + "\n"
        console.log(cantPago)
    }else{
        let cantPago = cantIndividual - monto
        mensaje = mensaje + persona + " debe pagar: " + cantPago + "\n"
    }
}

