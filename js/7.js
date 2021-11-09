let anio; ;
anio = prompt("Ingrese el año");
anio = parseInt(anio)
if((anio%4==0) && (anio%100!=0 || anio%400==0)){
    document.write("El año es bisiesto");
}else{
    document.write("El año no es bisiesto")
}



