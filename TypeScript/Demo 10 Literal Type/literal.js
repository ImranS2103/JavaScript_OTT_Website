function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 10, "as-number"));
console.log(combine('Peter', 'Wisely', "as-string"));
