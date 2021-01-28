// Al finalizarse de cargar el DOM:
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";


function obtenerListaArticulosBajoStock () {
	$(document).ready($.getJSON(server+"/stock", function (data) {
		console.log(data);
		for(i=0; i<data.length;i++){
			let unidadesVendidasPorMes= (data[i].unidades*1.3).toFixed(0);
			data[i].unidades=unidadesVendidasPorMes;
			console.log(unidadesVendidasPorMes);
			if (data[i].cant_stock==0){
				data[i].cant_stock=0;
			}
			
			data[i].stockCritico=(unidadesVendidasPorMes/data[i].cant_stock).toFixed(2);
			// if (data[i].stockCritico >= 0){
			// 	data[i].stockCritico ="nada";
			// } else{data[i].stockCritico}
			// let ventaMensual[i]=data.resultado[i].unidades*1.30;
			// let ratioStock=(data.resultado[i].unidades.toFixed(0);
			// data.resultado[i].pf="$"+precioConIva;
			// data.resultado[i].p="$"+data.resultado[i].p.toFixed(0);
			// data.resultado[i].s=convertirStockNumericoEnEscala(data.resultado[i].s);
			
		}	

	 $('table').bootstrapTable({ 
		data:data.filter(filtrarcodigos)
		//data:data
		}); 
	}));
}

obtenerListaArticulosBajoStock();


// "articulo": "4100/5",
// "descrip_arti": "4100 TURBOLIGHT 10W40 5L",
// "UM": "D34",
// "unidades": 39,
// "cant_stock": -1,
// "stockCritico": -40



// filtro los codigos que vael la pena contar 
function filtrarcodigos(cantidad){
	return((cantidad.stockCritico > 0 && cantidad.stockCritico > 0.5) || cantidad.cant_stock<0);
}