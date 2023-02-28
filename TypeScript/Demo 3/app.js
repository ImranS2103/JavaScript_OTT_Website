function sum(num1,num2)
{
    if(typeof num1 ==='number' && typeof num2 === 'number')
    {
        return num1+num2;
    } 
    else
    {
        return new Error("values are not number");
    }
}
console.warn(sum(10,10))