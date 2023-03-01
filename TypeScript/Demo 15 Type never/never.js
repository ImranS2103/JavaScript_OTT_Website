function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError('server side error', 500));
