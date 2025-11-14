//WHATSAPP FUNCTION
$(function () {
	// Phone numbers for each section
	//const phoneNumbers = {
	//	transporte: "5491165106333", // HEMAN
	//	lubricentro: "5491140565047", // LUCAS MOSTRADOR
	//	agro: "5491144075850", // NUEVO NÚMERO
	//	industria: "5491144075850", // NUEVO NÚMERO
	//};
	const phoneNumbers = {
		transporte: "5491165106333", // HEMAN
		lubricentro: "5491165106333", // LUCAS MOSTRADOR
		agro: "5491165106333", // NUEVO NÚMERO
		industria: "5491165106333", // NUEVO NÚMERO
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
