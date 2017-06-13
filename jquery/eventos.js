

$(document).ready(function(){

	var loquehay= $('#parrafo').html(); // si no le doy parámetro a html() éste me devuelve el valor que tenga nuestro párrafo como html
		alert(loquehay);

		//Estoy usando jquery

//-----------------metodos-----------------------//

//-----------------ATTR--------------------------//
	//	Nos permite ir a los atributos de cualquier elemento de nuestro html

	$('#prueba').attr('class','ejemplo'); // si no le doy parámetro a html() éste me devuelve el valor que tenga nuestro párrafo como html
		
		// en la consola si analizamos el div se va a ver así ...<div id="prueba" class="ejemplo" ></div>

//--------------Este método asigna un valor----------------------//

	var clase= $('#prueba').attr('id');
	alert(clase);

	//prueba



});

