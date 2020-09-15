// Al finalizarse de cargar el DOM:
//var port = process.env.PORT || 8080;
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";





function cargarOfertasMensuales () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasMensuales", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".oferta").clone().removeClass("oferta");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21).toFixed(0));
			$(divCompetencia).find('.imagenOferta').attr("src",data[i].img);
    	  	$(".ofertas").append(divCompetencia);
		};
		$("#plantilla").remove();
	});

}

function cargarKits () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasFram", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".kit").clone().removeClass("kit");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".kits").append(divCompetencia);
		};
		$("#plantilla2").remove();
	});
}





cargarOfertasMensuales();
cargarKits(); 
//cargarOfertasFram();