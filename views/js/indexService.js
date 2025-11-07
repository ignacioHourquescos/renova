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
	// Phone numbers for each section
	const phoneNumbers = {
		transporte: "5491165106333", // HEMAN
		lubricentro: "5491140565047", // LUCAS MOSTRADOR
		agro: "5491144075850", // NUEVO NÚMERO
		industria: "5491144075850", // NUEVO NÚMERO
	};

	// Create modal HTML if it doesn't exist yet
	if ($("#whatsappSectionModal").length === 0) {
		$("body").append(`
			<div class="modal fade" id="whatsappSectionModal" tabindex="-1" role="dialog" aria-labelledby="whatsappSectionModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="whatsappSectionModalLabel">¿En qué podemos ayudarte?</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>Selecciona el área en la que necesitas asesoramiento:</p>
							<div class="list-group">
								<button type="button" class="list-group-item list-group-item-action" data-section="transporte">Empresas de Transportes y Logística</button>
								<button type="button" class="list-group-item list-group-item-action" data-section="agro">AGRO</button>
								<button type="button" class="list-group-item list-group-item-action" data-section="industria">Industria</button>
								<button type="button" class="list-group-item list-group-item-action" data-section="lubricentro">Lubricentros</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);

		// Handle section selection
		$("#whatsappSectionModal .list-group-item").on("click", function () {
			const section = $(this).data("section");
			const phone = phoneNumbers[section];

			// Close the modal
			$("#whatsappSectionModal").modal("hide");

			// Open WhatsApp with the selected phone number
			const whatsappURL = `https://wa.me/${phone}`;
			window.open(whatsappURL);
		});
	}

	// Set up custom WhatsApp button click handler
	$("#customWhatsAppBtn").on("click", function () {
		// Track the click event if the tracking function exists
		if (typeof gtag_report_conversion3 === "function") {
			gtag_report_conversion3();
		}

		// Show the modal with section options
		$("#whatsappSectionModal").modal("show");
		return false;
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
