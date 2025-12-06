function precio_completo (precio, impuesto) {
    return precio + (precio * impuesto);
}

resultado = precio_completo(19.90,0.15);
console.log(resultado);