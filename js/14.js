let numeroprimo = prompt ("valor para numeroprimo");
let esnumeroprimo = true;
for (let i=2; i< numeroprimo/2; i++){
    if (numeroprimo%i ===0){
        esnumeroprimo = false;
    }
}
if (esnumeroprimo){
    console.log("Si es un número primo", numeroprimo);
} else {
    console.log("No es un número primo", numeroprimo);
}