// Al finalizarse de cargar el DOM:
//var port = process.env.PORT || 8080;
//var server ="https://renovaapi.herokuapp.com";
var server ="http://localhost:5000";


function cargarOfertasMensuales () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasMensuales", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text((data[i].p*1.21).toFixed(0));
			$(divCompetencia).find('.imagenOferta').attr("src",data[i].img);
    	  	$(".ofertas").append(divCompetencia);
		};
		$("#plantilla").remove();
	});
}


// function cargarOfertasFram () {
// 	//busca en el backend todas las ofertas


	
	// $.getJSON(server+"/ofertasFram", function (data) {
	// // Se carga la información obtenida en el DOM
	// var cantidad = data.recordset.length;
    // var idColor = 1;
	// for (i = 0; i < cantidad; i++) {
	// 		// Se clona la plantilla y la nueva copia ya no es una plantilla
	// 		var divCompetencia = $(".competenciaPlantilla").clone().removeClass("competenciaPlantilla");
	// 		// Se coloca el id correcto (data[i].id) de cada competencia en los links de acciones
	// 		$(divCompetencia).find('.link').each( function(){
	// 			$( this ).attr("href",$( this ).attr("href")+data.recordset[i].cod_articulo);
    //   });
    //   //se crea el elemiento image
  
	// 		// Se coloca el nombre de cada competencia
    //   $(divCompetencia).find('.titulo').text(data.recordset[i].cod_articulo);
	//   $(divCompetencia).find('.detalle').text(data.recordset[i].descrip_arti);
	//   $(divCompetencia).find('.precio').text((data.recordset[i].precio_vta*1.21).toFixed(0));
	// 		$(divCompetencia).find('.card').addClass('color'+idColor); 
    //   $(".competencias").append(divCompetencia);
    //   $(divCompetencia).find('.imagenOferta').attr("src",data.recordset[i].web_imagen);
	// 		$(divCompetencia).s
	// 	};
	// 	$("#plantilla").remove();
	// });
	

// }
  

cargarOfertasMensuales();
//cargarOfertasFram();