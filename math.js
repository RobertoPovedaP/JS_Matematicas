console.group('Triángulo')
function procesarTriangulo(l1, l2, base, altura){
    return{
        perimetro: (l1+l2+base),
        area: (base*altura)/2,
    };
}
console.groupEnd('Triángulo')


console.group('Cuadrado')
function procesarCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado,
    };
}
console.groupEnd('Cuadrado')

console.group('Circulo')
function procesarCirculo(r){
    return{
        perimetro: 2*r*2.1416,
        area: r*r*2.1416,
    };
}
console.groupEnd('Circulo')

function alturaIsosceles(lado, base){
    if(lado!=base){
        const h= Math.sqrt(Math.pow(lado,2)-((Math.pow(base,2))/4));
        return h;
    }
    else{
        console.warn('Este no es un triángulo isósceles');
    }

}
