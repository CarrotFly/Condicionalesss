let a = prompt();
let b = prompt();
let c = prompt();

if (Math,abs(a-b) < Math.abs(c) && Math.abs(c) < Math.abs(a+b)) {
    if(a == b && b == c) {
        alert("Es equilatero");
    } else if (a == b || b ==c || c == a) {
        alert("Es isósceles");
    } else{
        alert("Es escaleno");
    }
} else{
    alert("El triángulo no existe");
}