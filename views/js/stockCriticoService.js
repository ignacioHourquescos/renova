// Al finalizarse de cargar el DOM:
var server = "https://renovaapi-production.up.railway.app";
//var server ="http://localhost:5000";

// var mm = String((new Date()).getMonth() + 1).padStart(2, '0');
// var yyyy = (new Date()).getFullYear();

// var array=[];

// //FUNCION QUE CARGA ADENTRO DEL ARRAY LAS VENTAS MENUALES PROMEDIO (TOMA EL DIA DE HOY Y DIVIDE LAS UNNIDADES VENDIDAS POR LA CANTIDAD DE MESES)
// function ventasMensuales(yyyy,mm) {
//     $(document).ready($.getJSON(server+"/ventasGenerales?fechaDesde="+yyyy+"0101&fechaHasta="+yyyy+mm+"29", function (data) {
// 		for (var i=0; i<data.length; i++) {
// 			array.push({"codigo": data[i].cod_articulo, "desc":data[i].descrip_arti, "UM":data[i].um,"cantidad": data[i].canti/mm, "stock":0});
// 			//Llamo a funcion que pushe a adentro del array el stock actual
// 			//StockActual(data[i].cod_articulo.valueOf());
// 			array[i].stock=stockActual(data[i].cod_articulo.valueOf());
// 		}

// 	}));
// 	console.log(array);

// }

// //funcion llamada en ventas mensuales. pushea el stock disponible
// function stockActual(codigo){
// 	$(document).ready($.getJSON(server+"/obtenerStockArticulo?id='"+codigo+"'", function(data){
// 		return(data[0].s);
// 	}
// 	));
// }

// ventasMensuales(yyyy,mm);

function obtenerListaArticulosBajoStock() {
	$(document).ready(
		$.getJSON(server + "/stock", function (data) {
			console.log(data);
			for (i = 0; i < data.length; i++) {
				let unidadesVendidasPorMes = (data[i].unidades * 1.3).toFixed(0);
				data[i].unidades = unidadesVendidasPorMes;
				console.log(unidadesVendidasPorMes);
				if (data[i].cant_stock == 0) {
					data[i].cant_stock = 0;
				}

				data[i].stockCritico = (
					unidadesVendidasPorMes / data[i].cant_stock
				).toFixed(2);
				// if (data[i].stockCritico >= 0){
				// 	data[i].stockCritico ="nada";
				// } else{data[i].stockCritico}
				// let ventaMensual[i]=data.resultado[i].unidades*1.30;
				// let ratioStock=(data.resultado[i].unidades.toFixed(0);
				// data.resultado[i].pf="$"+precioConIva;
				// data.resultado[i].p="$"+data.resultado[i].p.toFixed(0);
				// data.resultado[i].s=convertirStockNumericoEnEscala(data.resultado[i].s);
			}

			$("table").bootstrapTable({
				data: data.filter(filtrarcodigos),
				//data:data
			});
		})
	);
}

obtenerListaArticulosBajoStock();
