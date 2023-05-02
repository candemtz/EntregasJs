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

const arrayA = [];
const arrayB = [];
const arrayC = [];
const arrayPlatos = [];

class Plato{
    constructor(nombre,compartido,precio){
        this.nombre = nombre;
        this.compartido = compartido;
        this.precio = precio;            
    }
}

class Comensal{
    constructor(nombre){
        this.nombre = nombre;         
    }
}

let cantPersonas = parseInt(prompt("Por favor ingrese la cantidad de comensales"));


for(let i = 0;i < cantPersonas; i++){
    let nombPersonas = prompt("Por favor ingrese el nombre del comensal numero " + i);
    if(i===0){
        const comensalUno = new Comensal (nombPersonas);
        const arrayA = [comensalUno]
        //arrayA.push(comensalUno);
        console.log(comensalUno);
        console.log("aca esta el array"+arrayA);
    }
    if(i===1){
        const comensalDos = new Comensal (nombPersonas);
        arrayA.push(comensalDos);
        console.log("aca esta el otro array"+arrayA);
        console.log(comensalDos);
    }
    if(i===2){
        const comensalTres = new Comensal (nombPersonas);
        arrayA.push(comensalTres);
        console.log(comensalTres);
    }
    if(i===3){
        const comensalCuatro = new Comensal (nombPersonas);
        arrayA.push(comensalCuatro);
        console.log(comensalCuatro);
    }  
}  
console.log(arrayA);

for (let i=0;i<cantPersonas;i++){
    let cantPlatos = parseInt(prompt("Cuantos platos consumio " + arrayA[i]));
    arrayB.push(cantPlatos);
    for (let i=0;i<cantPlatos;i++){
        let platoNombre = prompt("Ingrese el  nombre del plato " + i );
        let platoCompartido = prompt("Compartio el plato con otro comensal? S/N");
        if ((platoCompartido === 'S') ||  (platoCompartido === 's')){
            let nombCompartido = prompt("Ingrese con quien compartio el plato");  
            console.log("hola llegue " + nombCompartido);
            //metodo de busqueda  
            const buscaComensal = arrayA.find(item=> item.nombre === nombCompartido);
            console.log("hola llegue " + buscaComensal);    
        };
        let platoPrecio = parseInt(prompt("Ingrese el  precio del plato " + i ));
        if(i===0){
            const PlatoUno = new Plato (platoNombre,platoCompartido,platoPrecio);
            console.log(PlatoUno);
            const arrayPlatos = [];
            arrayPlatos.push(PlatoUno);
            console.log(arrayPlatos);
        }
        if (i === 1){
            const PlatoDos = new Plato (platoNombre,platoCompartido,platoPrecio);
            arrayPlatos.push(PlatoDos);
            console.log(PlatoDos);
            console.log(arrayPlatos);
        }
        if (i === 2){
            const PlatoTres = new Plato (platoNombre,platoCompartido,platoPrecio);
            arrayPlatos.push(PlatoTres);
            console.log(PlatoTres);
            console.log(arrayPlatos);
        }
        
        
    }
    console.log(arrayB);
    console.log(arrayC);
    
    
    //arrayC.push(plato);
}




/*arrayPlatos.forEach(Plato=>{
    console.log(Plato);
})*/








let pregunta = parseInt(prompt("Todos gastaron lo mismo?(Si='S' , No='N'"));
let totalCompra = parseInt(prompt("Por favor ingrese el total de la compra"));
    for(let i = 0;i < cantPersonas; i++){
        let persona1 = prompt("Por favor ingrese el nombre de la persona " + i);
        let monto1 = parseInt(prompt("Por favor ingrese cuanto dinero puso "+ persona1 + ":"));
        calculaDivision(totalCompra,cantPersonas,persona1,monto1,i);
    }  
alert("Resultados Finales: \n"+ mensaje); 


function calculaDivision(totalCompra,cantPersonas,persona,monto){
    let cantIndividual = totalCompra / cantPersonas;
    if (monto > cantIndividual){
        let cantPago = monto - cantIndividual;
        mensaje = mensaje +"Deben pagarle: "+ cantPago + " a " + persona + "\n";
    }else{
        let cantPago = cantIndividual - monto;
        mensaje = mensaje + persona + " debe pagar: " + cantPago + "\n";
    }
}

