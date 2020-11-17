var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";
var ventasFiltros=[];

function ventasPorAgrupacion(id,mes,codigo) {  
    $(document).ready($.getJSON(server+"/ventasPorAgrupacion?id="+id+"&fechaDesde=2020"+mes+"01&fechaHasta=2020"+mes+"29", function (data) {         
      
      var sumador=0;
      for (var i=0;i<data.length;i++){     
        sumador=sumador+data[i].canti_kilos;
      }
      ventasFiltros[codigo]=sumador;
    }));    
}

var agrupaciones = {
  Fram:1,
  OfertasFram:23,
  KitsFram:16,
  Mahle:15,
  Rama:8,
  Mann:9,
  AlternativosHabitaculo:29,
  Eam:48,
  Valvoline:3,
  Total:5,
  Motul:12,
  Petronas:316,
  Trico:13,
  WagnerLockheed:11,
  Locx:14
}
var anio =[
  {codigo:0,mes:"01",dias:31},
  {codigo:1,mes:"01",dias:31},
  {codigo:2,mes:"02",dias:29},
  {codigo:3,mes:"03",dias:31},
  {codigo:4,mes:"04",dias:30}, 
  {codigo:5,mes:"05",dias:31},
  {codigo:6,mes:"06",dias:30},
  {codigo:7,mes:"07",dias:31},
  {codigo:8,mes:"08",dias:31},
  {codigo:9,mes:"09",dias:30},
  {codigo:10,mes:"10",dias:31},
  {codigo:11,mes:"11",dias:30},
  {codigo:12,mes:"12",dias:31}
]


$(document).ready(function() {
  $("#dropdown").on("option", "click", function() {
    alert("Haha");
  });
});
// calse coderhouse toto

const pedido = new Promise((resolve,reject)=>{
  if(true){
    resolve ("todo muy lindo");
  }
  else{
    reject("todo feo");}
  }
);

var array=[];
var selected =document.getElementById("dropdown").value;


pedido
.then(()  =>{console.log(selected);(ventasPorAgrupacion(selected, anio[0].mes, anio[0].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[1].mes, anio[1].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[2].mes, anio[2].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[3].mes, anio[3].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[4].mes, anio[4].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[5].mes, anio[5].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[6].mes, anio[6].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[7].mes, anio[7].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[8].mes, anio[8].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[9].mes, anio[9].codigo));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[10].mes,anio[10].codigo ));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[11].mes,anio[11].codigo ));})
.then(()  =>{(ventasPorAgrupacion(selected, anio[12].mes,anio[12].codigo ));})
.then(()  =>{console.log(ventasFiltros);})
.then(()  =>{setTimeout(()=>{    
  array=ventasFiltros.slice(1);
  function renderizarGrafico(){
      var options = {
        series: [{
        name: 'Filtros Fram',
        data: array
      }],
        chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
      
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          }
        }
      
      },
      title: {
        text: 'Fram',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
      };
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    }
  renderizarGrafico();console.log("llegamso hasta aca");},4000)
})






  
// const pedido2 = new Promise((resolve,reject)=>{if(true){resolve ("todo muy lindo");var array=[];}else{reject("todo feo");}});
// var array=[];
// pedido2
//   .then(()  =>{ventasFiltros=[]})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[0].mes, anio[0].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[1].mes, anio[1].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[2].mes, anio[2].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[3].mes, anio[3].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[4].mes, anio[4].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[5].mes, anio[5].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[6].mes, anio[6].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[7].mes, anio[7].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[8].mes, anio[8].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[9].mes, anio[9].codigo));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[10].mes,anio[10].codigo ));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[11].mes,anio[11].codigo ));})
//   .then(()  =>{(ventasPorAgrupacion(agrupaciones.Valvoline, anio[12].mes,anio[12].codigo ));})
//   .then(()  =>{console.log(ventasFiltros);})
//   .then(()  =>{setTimeout(()=>{    
//     array=ventasFiltros.slice(1);
//     function renderizarGrafico(){
//       var options = {
//         series: [{
//         name: 'Filtros Fram',
//         data: array
//       }],
//         chart: {
//         height: 350,
//         type: 'bar',
//       },
//       plotOptions: {
//         bar: {
//           dataLabels: {
//             position: 'top', // top, center, bottom
//           },
//         }
//       },
//       dataLabels: {
//         enabled: true,
      
//         offsetY: -20,
//         style: {
//           fontSize: '12px',
//           colors: ["#304758"]
//         }
//       },
      
//       xaxis: {
//         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         position: 'top',
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false
//         },
//         crosshairs: {
//           fill: {
//             type: 'gradient',
//             gradient: {
//               colorFrom: '#D8E3F0',
//               colorTo: '#BED1E6',
//               stops: [0, 100],
//               opacityFrom: 0.4,
//               opacityTo: 0.5,
//             }
//           }
//         },
//         tooltip: {
//           enabled: true,
//         }
//       },
//       yaxis: {
//         axisBorder: {
//           show: false
//         },
//         axisTicks: {
//           show: false,
//         },
//         labels: {
//           show: false,
//           formatter: function (val) {
//             return val;
//           }
//         }
      
//       },
//       title: {
//         text: 'Fram',
//         floating: true,
//         offsetY: 330,
//         align: 'center',
//         style: {
//           color: '#444'
//         }
//       }
//       };
      
//       var chart = new ApexCharts(document.querySelector("#valvo"), options);
//       chart.render();
//       }
//     renderizarGrafico();console.log("llegamso hasta aca");},3000)
//   })






// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[1].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[2].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[3].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[4].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[5].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[6].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[7].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[8].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[9].mes));
// ventasFiltros.push(ventasPorAgrupacion(agrupaciones.Fram, anio[6].mes));
// let myFirstPromise = new Promise((resolve, reject) => {ventasPorAgrupacion(agrupaciones.Fram, anio[1].mes);resolve();})
// .then(()  => {ventasPorAgrupacion(agrupaciones.Fram, anio[2].mes);resolve();})
// .then(()  => {ventasPorAgrupacion(agrupaciones.Fram, anio[3].mes);})
// .then(()  => {renderizarGrafico(ventasFiltros)});





// ventasPorAgrupacion(agrupaciones.Fram,anio[0].mes);
// for (var i =1; i<=12; i++){
//   var valor = ventasPorAgrupacion(agrupaciones.Fram,anio[i].mes);
  
// }

// function calcularVentas (anio, agrupaciones,ventasPorAgrupacion){
//   for(var i =0; i<=12;i++){
//     ventasFiltros[i]=ventasPorAgrupacion(agrupaciones.Fram, anio[i].mes);
//     console.log(ventasFiltros[i]);
//   }
// }


 var array;
