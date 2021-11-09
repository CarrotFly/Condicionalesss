let a = prompt("valor para a:")
let b = prompt("valor para b:")
let c = prompt("valor para c:")
if(a!=0)
{
    let d = b*b - 4*a*c;
    if (d>0)
    {
        let x1 = (-b + Math.sqrt(d))/(2*a);
        let x2 = (-b - Math.sqrt(d))/(2*a);
        alert("x1="+x1+ ",x2="+x2);
    }
    else if (d==0)
    {
        let x = -b/(2*a);
        alert("x="+x);
    }
    else{
        alert("No existe solución en los reales");
    }
}
else{
    if(b==0&&c!=0){
        alert("la ec. es absurda");
    } else if (c!=0){
        alert("la ec. es lineal");
        alert("x=" + -c/b);
    } else{
        alert("0");
    }
}