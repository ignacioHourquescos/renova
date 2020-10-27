// Al finalizarse de cargar el DOM:
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";






var id=getQueryParam("id");

function obtenerListaEspecifica (id) {
	$(document).ready($.getJSON(server+"/listas/"+id, function (data) { 
		if (window.matchMedia("(max-width: 400px)").matches) {
			for(i=0; i<data.resultado.length;i++){
				let stock=convertirStockNumericoEnEscala(data.resultado[i].s); 								//calculo VALOR STOCK
				let precioConIva=(data.resultado[i].p*1.21).toFixed(0); 									//calculo VALOR precio con IVA
				data.resultado[i].p= sacarDescuetnoTamboresyBaldes(id, data.resultado[i].id,precioConIva);	// Calculo descuentos en base a Agrupacion y tipo de producto
				data.resultado[i].s="Stock: "+stock;
				data.resultado[i].pf="Unitario Final x unid:\xa0\xa0\xa0$"+precioConIva;						//Concateno UNITARIO: al precio unitario				
			}		
		}
		else {
			for(i=0; i<data.resultado.length;i++){
				let stock=convertirStockNumericoEnEscala(data.resultado[i].s); 								//calculo VALOR STOCK
				let precioConIva=(data.resultado[i].p*1.21).toFixed(0); 									//calculo VALOR precio con IVA
				data.resultado[i].p= sacarDescuetnoTamboresyBaldes2(id, data.resultado[i].id,precioConIva);	// Calculo descuentos en base a Agrupacion y tipo de producto
				data.resultado[i].s=stock;
				data.resultado[i].pf="$"+precioConIva;														//Concateno UNITARIO: al precio unitario				
				
			}		
		}	
		$('table').bootstrapTable({ 
			data: data.resultado,
		}); 
		document.getElementById("nombreLista").innerHTML=data.agrupacion;
		document.getElementById("descuento").innerHTML=data.descuento;
		$(".spinner-border").remove();
	}));
}




//escondo table header cuando es un celular, y si es en PC lo muestro
  if (window.matchMedia("(max-width: 400px)").matches) {
	console.log("menos de 400px");
	
} else {
	console.log("mas de 400px");
	document.getElementById("myTable").removeAttribute("data-show-header");
}




//SACO TAMORE SY BALDES DEL DESCUTNO
function sacarDescuetnoTamboresyBaldes(id,data,precioConIva){
	if( id==1){
		data="";
		return(data);
	}		//Verifico que sea caja,tambor
	else if(id==12 && (data=="TAMBOR/6100/10W40"||data=="TAMBOR/TEKMA/10W40"||data=="TAMBOR/TEKMA/15W40"||data=="BALDE/TEKMA/15W40" )){
		data="Unitario Final x caja: -";
		return(data);
	}
	else if(id==3 && (data.substring(0,2)=="01")){
		data="Unitario Final x caja: -";
		return(data);
	}
	else if(id==316 && (data.substring(0,6)=="TAMBOR" || data.substring(0,5)=="BALDE")){
		data="Unitario Final x caja: -";
		return(data);
	}
	else if(id==5 && (data.substring(0,6)=="TAMBOR" || data.substring(0,5)=="BALDE")){
		data="Unitario Final x caja: -";
		return(data);
	}
	// Hago el 10% de descuento en envases
	data="Unitario Final x caja: $"+(precioConIva*0.90).toFixed(0);
	return(data);
	
};

function sacarDescuetnoTamboresyBaldes2(id,data,precioConIva){
	if( id==1){
		data="-";
		return(data);
	}		//Verifico que sea caja,tambor
	else if(id==12 && (data=="TAMBOR/6100/10W40"||data=="TAMBOR/TEKMA/10W40"||data=="TAMBOR/TEKMA/15W40"||data=="BALDE/TEKMA/15W40" )){
		data="-";
		return(data);
	}
	else if(id==3 && (data.substring(0,2)=="01")){
		data="-";
		return(data);
	}
	else if(id==316 && (data.substring(0,6)=="TAMBOR" || data.substring(0,5)=="BALDE")){
		data=" -";
		return(data);
	}
	else if(id==5 && (data.substring(0,6)=="TAMBOR" || data.substring(0,5)=="BALDE")){
		data=" -";
		return(data);
	}
	// Hago el 10% de descuento en envases
	data="$"+(precioConIva*0.90).toFixed(0);
	return(data);
	
}


//FUNCION CONVERTIR STOCK NUMERICO EN ALFABETICO
function convertirStockNumericoEnEscala(elemento){
<<<<<<< HEAD
	if (elemento>15){
		return "DISPONIBLE"
=======
	if (elemento>20){
		return "Disponible"
>>>>>>> listas
	} 	
	else	
		return "Consultar"
}

//DISPARO FUNCION PRINICPAL
obtenerListaEspecifica(id);


$( document ).ready(function() {
    document.getElementsByClassName("search-input").placeholder="Buscar por Codigo";
});