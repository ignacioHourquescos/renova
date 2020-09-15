// Al finalizarse de cargar el DOM:
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";


function obtenerListaArticulosBajoStock () {
	$(document).ready($.getJSON(server+"/stock", function (data) { 
	 $('table').bootstrapTable({ 
		data: data
		}); 
	}));
}

obtenerListaArticulosBajoStock();
