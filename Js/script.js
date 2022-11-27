//Calcular el costo total con propina//
let preguntaPropina = prompt("¿Desea dejarle propina a la persona que lo atendio?")
let totalDeCuenta = Number(prompt("¿Cúal es su gasto total?"))
let propina = totalDeCuenta * 0.10
let abonoConPropina = propina + totalDeCuenta
while(totalDeCuenta <= 0){
    alert("Ingrese el gasto para calcular la propina")
    break
}
if (preguntaPropina == "Si" || preguntaPropina == "si" ) {
    alert("Usted debera abonar "+"$"+abonoConPropina)
}

else{
    alert("Gracias por su visita.")
}