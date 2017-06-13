
/*$*/ //significa la funcion jquery

/*$(document).ready*/ // cuando el documento este listo entonces... vamos a ejecutar lo siguiente

//--------Maneras de escribir jquery 1--------------------------//

/*$(document).ready(function function_name(argument) {
	// body...
})

//--------Maneras de escribir jquery 2--------------------------//

$(document).on('ready',function(){

})

//--------Maneras de escribir jquery 3--------------------------//

$(function(){

});*/

//---------------------------------------------------------------------//


$(document).ready(function(){
	$('#prueba').text('<p> Hola Mundo!</p>'); //se va a ver azul la letra

	$('.pruebas').html('<strong>Estoy usando jquery</strong>'); //se va a ver roja la letra.. va a tomar las el valor de las etiquetas porque dice HTML

	$('div').css({
		'background-color':'cyan', //les va a dar color de fondo cyan a todos los divs
	});

	$('div.miDivClass').css({
		'background-color':'violet', //le va a dar color violeta solo al div (miDivClass)
	});

	$('div.miDivClass article p').text("El articulo y el parrafo");//cambiamos el texto del div (miDivClass)

	$('div.miDiv article p').text("El articulo y el parrafo en color cyan"); //cambiamos el texto del div (miDiv)
	
	$('#parrafoUno, #parrafoDos, span').text("Somos iguales"); //editar tres elementos diferentes (dos parrafos... y el span)

});

