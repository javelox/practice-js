const PI = Math.PI;
let ladoCuadrado = document.getElementById("inputCuadrado").value;

const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;

const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = (radio) => radio * 2;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => PI * (radio * radio);

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("inputCuadrado").value;
  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
};
const calcularAreaCuadrado = () => {
  const input = document.getElementById("inputCuadrado").value;
  const area = areaCuadrado(input);
  alert(area);
};

document.getElementById("perimetroCuadrado").onclick =
  calcularPerimetroCuadrado;
document.getElementById("areaCuadrado").onclick = calcularAreaCuadrado;

const calcularPerimetroTriangulo =()=>{
  const lado1 = parseInt(document.getElementById("inputTriangulolado1").value)
  const lado2 = parseInt(document.getElementById("inputTriangulolado2").value)
  const base = parseInt(document.getElementById("inputTrianguloBase").value)
  alert(perimetroTriangulo(lado1, lado2, base));
}

document.getElementById("perimetroTriangulo").onclick = calcularPerimetroTriangulo;

const calcularAreaTriangulo =()=>{
    const altura = parseInt(document.getElementById("inputTrianguloBasePerimetro").value)
  const base = parseInt(document.getElementById("inputTrianguloAlturaPerimetro").value)
  alert(areaTriangulo(base, altura));
}

document.getElementById("areaTriangulo").onclick = calcularAreaTriangulo;



const calcularDiametroCirculo = ()=>{
  radio = parseFloat(document.getElementById("radioCirculo").value)
  alert(diametroCirculo(radio));
}

document.getElementById("diametroBoton").onclick = calcularDiametroCirculo;

const calcularPerimetroCirculo = ()=>{
  radio = parseFloat(document.getElementById("radioCirculo").value)
  alert(perimetroCirculo(radio));
}

document.getElementById("perimetroBoton").onclick = calcularPerimetroCirculo;

const calcularAreaCirculo = ()=>{
  radio = parseFloat(document.getElementById("radioCirculo").value)
  console.log(radio);
  alert(areaCirculo(radio));
}

document.getElementById("areaBoton").onclick = calcularAreaCirculo;