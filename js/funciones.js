var persona = document.getElementById("persona");
var velocidad = 20;
var mTop = 0;
var mLeft = 0;

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
	if(mLeft >=0 && mLeft< 380){
		document.getElementById("persona").src = "images/der.png";
		document.getElementById("derecha").focus();
		mLeft += velocidad;
		persona.style.marginLeft = mLeft +"px";
	}
}
function moverIzquierda(){
	if(mLeft >0 && mLeft<= 400){
		document.getElementById("persona").src = "images/izq.png";
		document.getElementById("izquierda").focus();
		mLeft -= velocidad;
		persona.style.marginLeft = mLeft +"px";
	}
}

function moverArriba(){
	if(mTop>0){
		document.getElementById("persona").src = "images/atr.png";
		document.getElementById("arriba").focus();
		mTop -= velocidad;
		persona.style.marginTop = mTop +"px";
	}
}

function moverAbajo(){
	if(mTop<=420){
		document.getElementById("persona").src = "images/ade.png";
		document.getElementById("abajo").focus();
		mTop += velocidad;
		persona.style.marginTop = mTop +"px";
	}
}