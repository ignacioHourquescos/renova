const constantes = {
	nosotros:
		"Somos una empresa familiar y referente dentro del segmento de filtros y lubricantes.\
  En 1976 cuando habia algunos pocos modelos de auto \
  comenzamos a trabajar con la marca FRAM. \
  Hoy, despues de 40 años seguimos  acompañando a nuestros\
  clientes en un contexto donde el mundo de los repuestos cada vez e complejiza mas\
  debido a la creciente cantidad de modelos",

	tituloServicios1: "VENTA AL POR MAYOR DE FITLROS Y LUBRICANTES",
	descServicios1:
		"Distribución al por mayor de filtros, lubricantes, aditivos y productos afines. Atendemos estaciones de servicios,\
   lubricentros, casa de repuestos, empresas de transportes y flotas de vehiculos",

	tituloServicios2: "LINEA PESADA Y AGRO",
	descServicios2:
		"Atencion a la industria y afines. Filtros y lubricantes para motores, compresores y generadores.",

	tituloServicios3: "INDUSTRIA",
	descServicios3:
		"Soluciones especializadas para la industria. Filtros y lubricantes de alta performance para maquinaria pesada, compresores industriales y equipos de gran exigencia.",
};

//WHATSAPP FUNCTION
$(function () {
	// Array of phone numbers for rotation
	const phoneNumbers = [
		"5491140565047", // LUCAS MOSTRADOR
		"5491149606709", // GIGI
		"5491165106333", // HEMAN
	];

	// Get a random phone number from the array
	const randomIndex = Math.floor(Math.random() * phoneNumbers.length);
	const selectedPhone = phoneNumbers[randomIndex];

	$("#WAButton").floatingWhatsApp({
		phone: selectedPhone, //WhatsApp Business phone number (randomly selected)
		//headerTitle: 'Escribinos!', //Popup Title
		//popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
		showPopup: false, //Enables popup display
		buttonImage: '<img src="views/images/whatsappModern.png" />', //Button Image
		//headerColor: 'crimson', //Custom header color
		//backgroundColor: 'crimson', //Custom background button color
		position: "right", //Position: left | right
	});
});

// FUNCTION

function inserstartextos(id, element) {
	document.getElementById(id).innerHTML = element;
}

inserstartextos("Nosotros", constantes.nosotros);
inserstartextos("tituloServicios1", constantes.tituloServicios1);
inserstartextos("descServicios1", constantes.descServicios1);
inserstartextos("tituloServicios2", constantes.tituloServicios2);
inserstartextos("descServicios2", constantes.descServicios2);
inserstartextos("tituloServicios3", constantes.tituloServicios3);
inserstartextos("descServicios3", constantes.descServicios3);
