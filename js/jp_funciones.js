window.onload = function() {

var cont = document.getElementById("escenario");
var persona = document.getElementById("persona");
var velocidad = 20;
var mTop = 0;
var mLeft = 0;
var anchoPantalla=600, altoPantalla=400;

document.addEventListener("keydown", function(e){
	if (e.keyCode == "39"){
		moverDerecha();
	}
	if (e.keyCode == "37"){
		moverIzquierda();
	}
	if (e.keyCode == "38"){
		moverArriba();
	}
	if (e.keyCode == "40"){
		moverAbajo();
	}
})

function moverDerecha(){
	document.getElementById("persona").src = "images/der.png";
	mLeft += velocidad;
	persona.style.marginLeft = mLeft +"px";
}
function moverIzquierda(){
	document.getElementById("persona").src = "images/izq.png";
	mLeft -= velocidad;
	persona.style.marginLeft = mLeft +"px";
}
function moverArriba(){
	document.getElementById("persona").src = "images/atr.png";
	mTop -= velocidad;
	persona.style.marginTop = mTop +"px";
}
function moverAbajo(){
	document.getElementById("persona").src = "images/ade.png";
	mTop += velocidad;
	persona.style.marginTop = mTop +"px";
}
}