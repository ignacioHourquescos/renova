// Al finalizarse de cargar el DOM:

<<<<<<< HEAD
//var server ="http://localhost:5000";
 var server ="https://renovaapi.herokuapp.com";
// var server ="http://localhost:5000";
=======
//var server ="http://";
var server ="https://renovaapi.herokuapp.com";
>>>>>>> listas

function cargarListas () {
	$.getJSON(server+"/listas", function (data) {
		var cantidad = data.length;
		var idColor = 1;
		for (i = 0; i < cantidad; i++) {
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
			$(divCompetencia).find('.link2').each( function(){$( this ).attr("href",$( this ).attr("href")+data[i].codigo);});
			$(divCompetencia).find('.titulo').text(data[i].descripcion);
			$(divCompetencia).find('.mes').text(data[i].mes);
			$(divCompetencia).find('.mes2').text(data[i].mes2);
			$(divCompetencia).find('.aumento').text(data[i].aumento);
			$(divCompetencia).find('.card').addClass('color'+idColor); 
			$(".competencias").append(divCompetencia);
			$(divCompetencia).show();
		};
		$(".spinner-border").remove();
	});
	
}
	

cargarListas();