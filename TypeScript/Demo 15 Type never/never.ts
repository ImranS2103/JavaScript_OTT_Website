function apiError(msg,code):never
{
    throw{message:msg,apiCode:code}
}

console.log(apiError('server side error',500))