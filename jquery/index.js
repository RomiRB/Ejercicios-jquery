var seleccion;

$(document).ready(function(){

	//var seleccion = $('.ejem1');
	seleccion = $('.ejem1');

	if(seleccion.length)
		console.log('Existen: ' + seleccion.length);
	else
		console.log('No Existen el elemento seleccion');
	
	//-----metodos--------------------------------------------//

	//--------------------NOT-----------------------------//

		//va a seleccionar el elemento que no tiene la clase detallada

	seleccion.not('.cl1').text('Este elemento no tiene la clase cl1')
	//solo va a seleccionar el elemento que no tenga la clase .cl1

	//---------------------HAS-----------------------------//
		//que tenga el elemento que le pedimos

	seleccion.has('p').text('Este elemento tiene un <p> en su contenido')

	//---------------------FIRST-----------------------------//
		//selecciona el (primer elemento y le da el estilo o el texto..que deseamos)

	$('li').first().html('<strong>Soy el elemento1</strong>');

	//---------------------EQ-----------------------------//
		//para seleccionar el elemento que le pedimos...se empieza en [0], si quiero el 4 tengo que escribir (3)

	$('li').eq(2).text('Soy el elemento número 3');

	//---------------------HAS-----------------------------//
		//que tenga el elemento que le pedimos


});




