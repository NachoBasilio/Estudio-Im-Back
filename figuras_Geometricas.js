//Cuadrados
const getPrimetroCuadrado = (lado) =>{
    console.log("El perimetro de el cuadrado de lados iguales a " + lado + " es de " + lado*4 + " centimetros")
}
const getAreaCuadrado = (lado) =>{
    console.log("El area del cuadrado formado por lados iguales a " + lado + " es igual a " + lado*lado + " centimetros cuadrados")
}
//Triangulos
const getPerimetroDeUnTriangulo = (lado1,lado2,lado3)=>{
    console.log("El perimetro del triangulo formado por los lados " + lado1 +", "+ lado2 +" y base "+ lado3 +" es de " + lado1+lado2+lado3 + " centimetros")
}
const getAreaDeUnTriangulo = (base, altura) => {
    console.log("El area de un triangulo de base "+ base + " y altura " + altura + " es de " + (base * altura)/2 + " centimetros cuadrados ")
}
//Circulos
const getPerimetroDeUnCirculo = (diametro) => {
    console.log("El perimetro de un circulo de diametro " + diametro + " es de " + diametro*Math.PI + " centimetros" )
}
const getAreaDeUnCirculo = (diametro)=>{
    console.log("El area de un circulo de diametro " + diametro + " es de " + Math.PI*(diametro/2)*(diametro/2) + " centimetros cuadrados")
}
console.group("Cuadrados")
getPrimetroCuadrado(5)
getAreaCuadrado(5)
console.groupEnd()
console.group("Triangulos")
getPerimetroDeUnTriangulo(6,6,4)
getAreaDeUnTriangulo(4,5.5)
console.groupEnd()
console.group("Circulos")
getPerimetroDeUnCirculo(8)
getAreaDeUnCirculo(8)
console.groupEnd()

