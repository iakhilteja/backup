var ascii = { ' ' : 32};
for(var i=8; i<=10; i++){
    ascii[String.fromCharCode(i)] = i;
}
for(var i=12; i<=13; i++){
    ascii[String.fromCharCode(i)] = i;
}
for(var i=32; i<=127; i++){
    ascii[String.fromCharCode(i)] = i;
}   console.log(ascii);
 