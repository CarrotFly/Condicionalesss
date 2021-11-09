let n=prompt("ingrese el valor de n");
let sum=0;

for(let i=1;i<=n;i++)
{
    sum = sum + (i - Math.pow(i+1,i)) - Math.pow(i,2);
}

alert(sum);