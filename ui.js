// Circulos
var bolaTennis = {
	"nombre": "tennis",
	"color": "green",
	"width": "30px",
	"height": "30px",
	"peso": "200 g",
	"X": "150px",
    "Y": "250px",
	"R": "30px"
};
var bolaBasket = {
	"nombre": "basket",
	"color": "orange",
	"width": "60px",
	"height": "60px",
	"peso": "200 g",
	"X": "150px",
    "Y": "150px",
    "R": "60px"
};
//cuadrados
var cuadro = {
	"nombre": "cuadro",
    "color": "purple",
	"width": "30px",
	"height": "30px",
	"peso": "200 g",
	"X": "260px",
    "Y": "250px"
}
var rectangulo = {
	"nombre": "rectangulo",
    "color": "black",
	"width": "60px",
	"height": "30px",
	"peso": "200 g",
	"X": "20px",
    "Y": "20px"
}

function dibujarBola(identificadorDOM, objeto) {
	var x =document.getElementById(identificadorDOM);
	x.style.background = objeto["color"];
	x.style.width = objeto["width"];
	x.style.height = objeto["height"];
    x.style.top = objeto["X"];
    x.style.left = objeto["Y"];
	x.style.borderRadius = objeto["R"];
	x.style.display = "block";
}
function dibujarBolaTennis() {
	dibujarBola("bolaT", bolaTennis);
	console.log(bolaTennis);
}
function dibujarBolaBasket() {
	dibujarBola("bolaB", bolaBasket);
	console.log(bolaBasket);
}
function dibujarCuadrado() {
	dibujarBola("cuadro", cuadro);
	console.log(cuadro);
}
function dibujarRectangulo() {
	dibujarBola("rect", rectangulo);
	console.log(rectangulo);
}

//////// Mouse Over Object

function mOver(identificadorDOM){
	var x=document.getElementById(identificadorDOM);

	document.getElementById('info').innerHTML = "La informacion de cada objeto se muestra en la terminal. ";
	document.getElementById('info2').innerHTML="..."+x;  //null
	//document.getElementById('info2').innerHTML="..."+identificadorDOM; //undefined
}

function mOut(){
	document.getElementById('info').innerHTML="Coloca el mouse sobre las figuras para ver la informacion."
}