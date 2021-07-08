//Cuadrados
const getPrimetroCuadrado = (lado) =>{
    return lado*4
}
const getAreaCuadrado = (lado) =>{
    return lado*lado
}
//Triangulos
const getPerimetroDeUnTriangulo = (lado1,lado2,lado3)=>{
    return lado1+lado2+lado3
}
const getAreaDeUnTriangulo = (base, altura) => {
    return (base * altura)/2
}
//Circulos
const getPerimetroDeUnCirculo = (diametro) => {
    return diametro*Math.PI
}
const getAreaDeUnCirculo = (diametro)=>{
    return Math.PI*(diametro/2)*(diametro/2)
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

const calcularPerimetroCuadrado = ()=>{
    let valor = document.getElementById("inputCuadrado").value
    let perimetro = getPrimetroCuadrado(valor)
    alert(perimetro)


}
const calcularAreaCuadrado = ()=>{
    let valor = document.getElementById("inputCuadrado").value
    let area = getAreaCuadrado(valor)
    alert(area)
}