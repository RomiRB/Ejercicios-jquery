//Añadir o quitar clases...

//-------------addClass-----------------//
//Sirve para que el elemento que recibe el método se le aplique una clase CSS //

//------------removeClass--------------//
//Sirve para que el elemento que recibe el método  se le elimine una clase CSS //

//------------EVENTOS----------------que se asocian a enlaces: //

//-----------mouseover--------------//
//Cuando el usuario coloque el puntero sobre el enlace

//---------mouseout-------------//
//Cuando el usuario retire el ratón del enlace

//------------------------------------------------------------------------//

$(document).ready(function(){
	
//---------------evento para cuando el usuario pasa el puntero por el enlace----------------//
	
	$('a').mouseover(function(event){
		$('#capa').addClass('clasecss'); //a addClass se le pasa una cadena con el nombre de la clase CSS ('clasecss')
						//para seleccionar el elemento que queremos añadir la clase hacemos $('#capa')estamos 
	});					//seleccionando el elemento de la página cuyo id="capa"
	
//---------------evento para cuando el usuario saca el puntero del enlace----------------//
	
	$('a').mouseout(function(event){
		$('#capa').removeClass('clasecss');
	});
});
