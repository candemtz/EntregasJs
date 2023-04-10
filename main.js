alert("Bienvenido al sistema!A continuacion podra ingresar su usuario y contraseña, tiene 5 intentos");

let ingresoExitoso = "";
let listo = "";
let montoTotal = 0;
let mensaje = " ";
let cantAccesos = 0;

while (ingresoExitoso != "S"){
    let usuarioAcceso = prompt("Ingrese su usuario");
    let claveAcceso = prompt("Ingrese su contraseña");
    iniciarSesion(usuarioAcceso,claveAcceso,listo);
    console.log(ingresoExitoso)
    console.log(listo)
    ingresoExitoso = listo;
}

let cantPersonas = parseInt(prompt("Por favor ingrese la cantidad de personas que pusieron dinero(maximo 5)"));
let totalCompra = parseInt(prompt("Por favor ingrese el total de la compra"));
console.log(cantPersonas)
console.log(totalCompra)
for(let i = 0;i < cantPersonas; i++){
        let persona1 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto1 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona1 + ":"));
        calculaDivision(totalCompra,cantPersonas,persona1,monto1,i)
/*     if (i > 1){
        let persona2 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto2 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona2 + ":"));
        calculaDivision(persona2,monto2)
    }
    if (i > 2){
        let persona3 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto3 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona3 + ":"));
        calculaDivision(persona3,monto3)
    }    
    if (i > 3){
        let persona4 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto4 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona4 + ":"));
        calculaDivision(persona4,monto4)
    }*/

    /*
    if (i > 4){
        let persona5 = prompt("Por favor ingrese el nombre de la persona " + i);
    }
} */
}  
alert("Resultados Finales: \n"+ mensaje); 



function calculaDivision(totalCompra,cantPersonas,persona,monto,i){
    /*let cantIndividual = totalCompra / cantPersonas;
    let cantUno = cantIndividual - monto1
    let cantDos = cantIndividual - monto2
    let cantTres = cantIndividual - monto3
    let cantCuatro = cantIndividual - monto4*/

    let cantIndividual = totalCompra / cantPersonas;
    let cantPago = cantIndividual - monto
    console.log(cantPago)
    console.log(monto)
    if (i == 0){
        if (cantPago>0){
            mensaje = persona + " debe pagar" + cantPago
        }else{
          
            let resta = monto - cantPago
            console.log(resta)
            mensaje = "\n"+"Deben pagarle:"+ resta + " a " + persona
        }
    }else{
        if (cantPago>0){
            mensaje = mensaje +"\n"+ persona + " debe pagar" + cantPago
        }else{
            let resta = monto - cantPago
            console.log(resta)

            mensaje = mensaje +"\n"+"Deben pagarle:"+ resta + " a " + persona
        }
    }

   

   /* if (cantUno>0){
        let mensaje = persona + "debe pagar" + cantUno
    }else if(monto > cantUno){
        let resta = monto - cantUno
        let mensaje ="Deben pagarle:"+ resta+ " a " + persona
    }
    if (cantDos>0){
        mensaje = mensaje+"/n"+ persona2 + "debe pagar" + cantDos
    }else if(monto2 > cantDos){
        let resta2 = monto2 - cantDos
        mensaje ="Deben pagarle:"+ resta2+ " a " + persona2
    }
    if (cantTres>0){
        mensaje = mensaje+"/n"+ persona3 + "debe pagar" + cantTres
    }else if(monto3 > cantTres){
        let resta3 = monto3 - cantTres
        mensaje ="Deben pagarle:"+ resta3+ " a " + persona3
    }
    if (cantCuatro>0){
        mensaje = mensaje+"/n"+ persona4 + "debe pagar" + cantCuatro;
    }else if(monto4 > cantCuatro){
        let resta4 = monto4 - cantCuatro;
        mensaje ="Deben pagarle:"+ resta4+ " a " + persona4;
    }*/
    
}

function iniciarSesion(usuarioAcceso,claveAcceso,listo){
    const usuarioRegistrado = 'accesocoder';
    const claveRegistrado = 'entregauno';
        if ((usuarioAcceso === usuarioRegistrado) && (claveAcceso === claveRegistrado)){
            alert("Ingreso Exitoso! Bienvenido al sistema");
            listo = "S";
            console.log(listo);
            return listo;
            
        }else if((usuarioAcceso != usuarioRegistrado) && (claveAcceso != claveRegistrado)){
            listo = "N";
            cantAccesos = cantAccesos + 1;
            alert("Acceso no valido, reingrese. Intento numero "+ cantAccesos);
        }
        if (cantAccesos == 6){
            alert("Supero la cantidad maxima de intentos.Contactese con soporte, soporteempresa@gmail.com-Adios!");
        }              
}

