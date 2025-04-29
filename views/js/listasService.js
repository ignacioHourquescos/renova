// Al finalizarse de cargar el DOM:

//var server ="http://";
var server = "https://renovaapi-heroku-20.herokuapp.com";

function cargarListas() {
	$.getJSON(server + "/listas", function (data) {
		var cantidad = data.length;
		var idColor = 1;
		for (i = 0; i < cantidad; i++) {
			var divCompetencia = $(".competenciaPlantilla")
				.clone()
				.removeClass("competenciaPlantilla");
			$(divCompetencia)
				.find(".link2")
				.each(function () {
					$(this).attr("href", $(this).attr("href") + data[i].codigo);
				});
			$(divCompetencia).find(".titulo").text(data[i].descripcion);

			$(divCompetencia)
				.find(".card")
				.addClass("color" + idColor);
			$(".competencias").append(divCompetencia);
			$(divCompetencia).show();
		}
		$(".spinner-border").remove();
	});
}

cargarListas();
