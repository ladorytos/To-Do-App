var getInputValue = function() {
	var inputBox = document.getElementById("inputBox"); //para acceder
	return inputBox.value;
}
var agregarTarea = function() {
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		tarea1(inputBoxValue);
		clean();
	}
}

var tarea1 = function(text){
	var agTarea= document.getElementById("lista");  //para acceder
	var tarea2 = document.createElement("div");  //crear elemento
	tarea2.id="tareas";
var checkbox = document.createElement("input"); //crear elemento
	checkbox.setAttribute("type","checkbox"); //agregar atributos al elemento
	checkbox.onchange=function(){
		if(checkbox){
			contenido.innerHTML=text.strike();  // describe ... tachado
		}else{
			contenido.innerHTML=text;  // describe
		}
	}
	var contenido = document.createElement("p");  //crear elemento
	contenido.id="contenido";
	contenido.innerHTML=text;  // describe
	var icono = document.createElement("span");  //crear elemento
	icono.setAttribute("id","icon"); //agregar atributos al elemento
	icono.setAttribute("class","fa fa-trash"); //agregar atributos al elemento
	icono.onclick = function(){
		lista.removeChild(tarea2);  //eliminar elemento
	}
	agTarea.appendChild(tarea2); //añadir al elemento
	tarea2.appendChild(checkbox); //añadir al elemento
	tarea2.appendChild(contenido); //añadir al elemento
	tarea2.appendChild(icono); //añadir al elemento
}
var clean = function() {
	var inputBox = document.getElementById("inputBox");  //para acceder
	inputBox.value = "";
	inputBox.focus();
}


