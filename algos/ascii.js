var ascii = {
    ' ' : 32
};
for(var i=65; i<=90; i++){
    ascii[String.fromCharCode(i)] = i;
}
for(var i=97; i<=122; i++){
    ascii[String.fromCharCode(i)] = i;
}
for(var i=47; i<=64; i++){
    ascii[String.fromCharCode(i)] = i;
}


module.exports = ascii;
