// Al finalizarse de cargar el DOM:
var server ="http://localhost:5000";


function obtenerListaArticulosBajoStock () {
	$(document).ready($.getJSON(server+"/stock", function (data) { 
	 $('table').bootstrapTable({ 
		data: data.recordsets[0]
		}); 
	}));



	$('#myTable > thead  > tr.precio').css('width','initial');
	$('#myTable').css('table-layout','initial');
}

function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputCodigo");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[0];
	  if (tr[i].getElementsByTagName("td")[0]) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }
  


  var $table = $('#myTablee');

  $(function() {
    $('#toolbar').find('select').change(function () {
      $table.bootstrapTable('destroy').bootstrapTable({
        exportDataType: $(this).val(),
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        columns: [
          {
            field: 'state',
            checkbox: true,
            visible: $(this).val() === 'selected'
          },
          {
            field: 'id',
            title: 'ID'
          }, {
            field: 'name',
            title: 'Item Name'
          }, {
            field: 'price',
            title: 'Item Price'
          }
        ]
      })
    }).trigger('change')
  })

//   function myFunction2() {
// 	var input, filter, table, tr, td, i, txtValue;
// 	input2 = document.getElementById("myInputDescripcion");
// 	filter = input2.value.toUpperCase();
// 	table = document.getElementById("myTable");
// 	tr = table.getElementsByTagName("tr");
// 	for (i = 0; i < tr.length; i++) {
// 	  td = tr[i].getElementsByTagName("td")[1];
// 	  if (td) {
// 		txtValue = td.textContent || td.innerText;
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 		  tr[i].style.display = "";
// 		} else {
// 		  tr[i].style.display = "none";
// 		}
// 	  }       
// 	}
//   }




obtenerListaArticulosBajoStock();
