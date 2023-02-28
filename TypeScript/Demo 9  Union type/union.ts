//union | |

function combine(a:number | string,b:number | string)  
{
    if(typeof a === 'number' && typeof b === 'number')
    {
        return a+b;
    }
    else{
        return a.toString()+b.toString();
    }
}

console.log(combine(10,10))

console.log(combine('Peter','Wisely'))