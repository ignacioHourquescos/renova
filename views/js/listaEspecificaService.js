// Al finalizarse de cargar el DOM:
//var server ="https://renovaapi.herokuapp.com";
var server ="http://localhost:5000";

var id=getQueryParam("id");

function obtenerListaEspecifica (id) {
	
	$(document).ready($.getJSON(server+"/listas/"+id, function (data) { 
		for(i=0; i<data.resultado.length;i++){
			let precioConIva=(data.resultado[i].p*1.21).toFixed(0);
			data.resultado[i].pf=precioConIva;
			data.resultado[i].p=data.resultado[i].p.toFixed(0);
			data.resultado[i].s=convertirStockNumericoEnEscala(data.resultado[i].s);
		}

	

		
		$('table').bootstrapTable({ 
			data: data.resultado,
		}); 
		document.getElementById("nombreLista").innerHTML=data.agrupacion;
	}));
}



obtenerListaEspecifica(id);

function convertirStockNumericoEnEscala(elemento){
	if (elemento<10) 	
		return "CONSULTAR"
	if (elemento>=10) 	
		return "DISPONIBLE"
}
