// Al finalizarse de cargar el DOM:
// var server ="https://renovaapi.herokuapp.com";
var server ="http://localhost:5000";






var id=getQueryParam("id");

function obtenerListaEspecifica (id) {
	$(document).ready($.getJSON(server+"/listas/"+id, function (data) { 
		for(i=0; i<data.resultado.length;i++){
			let precioConIva=(data.resultado[i].p*1.21).toFixed(0);
			data.resultado[i].pf="$"+precioConIva;
			data.resultado[i].p="$"+data.resultado[i].p.toFixed(0);
			//data.resultado[i].s=convertirStockNumericoEnEscala(data.resultado[i].s);
		}		
		$('table').bootstrapTable({ 
			data: data.resultado,
		}); 
		document.getElementById("nombreLista").innerHTML=data.agrupacion;
	}));
}

// function myFunction(x) {
// 	if (x.matches) { // If media query matches
// 	  document.body.style.backgroundColor = "pink";
// 	} else {
// 	 document.body.style.backgroundColor = "yellow";
// 	}
//   }
  
//   var x = window.matchMedia('(max-width: 600px)');
//   x.addEventListener(myFunction(x)); // Attach listener function on state changes


  if (window.matchMedia("(max-width: 400px)").matches) {
	console.log("menos de 400px");
	
} else {
	console.log("mas de 400px");
	document.getElementById("myTable").removeAttribute("data-show-header");
}



obtenerListaEspecifica(id);


function convertirStockNumericoEnEscala(elemento){
	if (elemento<10) 	
		return "CONSULTAR"
	if (elemento>=10) 	
		return "DISPONIBLE"
}



