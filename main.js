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

class Comensal {
    constructor(nombre, platos,gastos) {
        this.nombre = nombre;
        this.platos = platos;
        this.gastos = gastos;
      }
    }
    
class Plato {
    constructor(nombre, precio, compartido, compartidoCon) {
    this.nombre = nombre;
    this.precio = precio;
    this.compartido = compartido;
    this.compartidoCon = compartidoCon;
    }
}

//PRUEBA

const cantComensales = document.getElementById =("cantComensales") 

cantComensales.innertext = ""

//


let cantidadComensales = parseInt(prompt("Ingrese la cantidad de comensales"));
let arrayComensales = [];
let arrayCantPlatos= [];

// Preguntar los nombres de los comensales
for (let i = 0; i < cantidadComensales; i++) {
  let nombreComensal = prompt(`Ingrese el nombre del comensal ${i + 1}`);
  let comensal = new Comensal(nombreComensal, [], []);
  arrayComensales.push(comensal);
}

// Preguntar los platos consumidos por cada comensal
for (let i = 0; i < cantidadComensales; i++) {
  let cantidadPlatos = parseInt(prompt(`¿Cuántos platos consumió ${arrayComensales[i].nombre}?`));
  arrayCantPlatos.push(cantidadPlatos);
 

  for (let j = 0; j < cantidadPlatos; j++) {
        let nombrePlato = prompt(`Ingrese el nombre del plato ${j + 1} que consumió ${arrayComensales[i].nombre}`);
        let precioPlato = parseFloat(prompt(`Ingrese el precio del plato ${j + 1} que consumió ${arrayComensales[i].nombre}`));

        let compartidoPlato = prompt(`¿Compartió ${arrayComensales[i].nombre} el plato ${nombrePlato}? (S/N)`).toLowerCase() === 's';
        let compartidoCon = [];
        let montoCompartido = 0;
        if (compartidoPlato) {
            let cantidadCompartido = parseInt(prompt(`¿Con cuántas personas compartió ${arrayComensales[i].nombre} el plato ${nombrePlato}?`));
            montoCompartido = precioPlato / (cantidadCompartido + 1);
            for (let k = 0; k < cantidadCompartido; k++) {
                let nombreCompartido = prompt(`Ingrese el nombre de la persona con quien compartió el plato ${nombrePlato}`);
                compartidoCon.push(nombreCompartido);
                let comensalEncontrado = arrayComensales.find(comensal => comensal.nombre === nombreCompartido);
                if (comensalEncontrado) {

                    //comensal.gastos.push(montoCompartido);
                    alert(`Comensal ${nombreCompartido} encontrado`);
                }
            }
        }

        let comensalActual = arrayComensales[i];
        let plato = new Plato(nombrePlato, precioPlato, compartidoPlato, compartidoCon, montoCompartido);
        comensalActual.platos.push(plato);
    
    }

}

const comensalesDiv = document.getElementById('comensales');

for (let i = 0; i < arrayComensales.length; i++) {
  const comensalDiv = document.createElement('div');
 
  const nombreComensal = document.createElement('h3');
  nombreComensal.textContent = `Comensal ${i + 1}: ${arrayComensales[i].nombre}`;
  comensalDiv.appendChild(nombreComensal);

  const platosComensal = document.createElement('ul');
  for (let j = 0; j < arrayComensales[i].platos.length; j++) {
    const plato = arrayComensales[i].platos[j];
    const platoLi = document.createElement('li');
    platoLi.textContent = `${plato.nombre} - Precio: $${plato.precio} - Compartido: ${plato.compartido ? 'Sí' : 'No'}`;
    if (plato.compartido) {
      platoLi.textContent += ` - Compartido con: ${plato.compartidoCon}` 
      /*- Monto compartido: $${plato.montoCompartido.toFixed(2)}`;*/
    }
    platosComensal.appendChild(platoLi);
  }
  comensalDiv.appendChild(platosComensal);
  comensalesDiv.appendChild(comensalDiv);
}





/*let pregunta = parseInt(prompt("Todos gastaron lo mismo?(Si='S' , No='N'"));
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
}*/

