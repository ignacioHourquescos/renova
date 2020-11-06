var server ="https://renovaapi.herokuapp.com";

var id=getQueryParam("id");

function ventasPorAgrupacion(id) { 
    $(document).ready($.getJSON("http://renovaapi.herokuapp.com/ventasPorAgrupacion/"+id, function (data) { 
        var sumador=0;
        for (var i=0;i<data.length;i++){     
            sumador=sumador+data[i].canti_kilos;
        }
        document.getElementById(id).innerHTML =sumador;
    }));
    
}

ventasPorAgrupacion(12);
ventasPorAgrupacion(3);
ventasPorAgrupacion(1);
ventasPorAgrupacion(5);
ventasPorAgrupacion(316);
ventasPorAgrupacion(16);
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [ventasPorAgrupacion(12),ventasPorAgrupacion(3),35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  document.getElementById("motul").innerHTML =ventasPorAgrupacion(12);
  chart.render();