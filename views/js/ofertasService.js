// Al finalizarse de cargar el DOM:
//var port = process.env.PORT || 8080;
var server = "https://renovaapi-heroku-20.herokuapp.com";
//var server ="http://localhost:5000";

function cargarOfertasMensuales() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasMensuales", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".oferta").clone().removeClass("oferta");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      if (data[i].p < 100) {
        $(divCompetencia)
          .find(".precio")
          .html(
            '<a id="irALista" href="listaEspecifica2.html?id=' +
              data[i].p +
              '"><h1>Ir a Lista</h1></a>'
          );
      } else {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21).toFixed(0));
      }
      $(divCompetencia).find(".imagenOferta").attr("src", data[i].img);
      $(".ofertas").append(divCompetencia);
    }
    $("#plantilla").remove();
  });
}

function cargarOfertasFram() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasFram", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".ofertaFiltro")
        .clone()
        .removeClass("ofertaFiltro");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".ofertaFiltros").append(divCompetencia);
    }
    $("#plantilla7").remove();
    $(".spinner-border").remove();
  });
}

function cargarKits() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasKits", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".kit").clone().removeClass("kit");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".kits").append(divCompetencia);
    }
    $("#plantilla2").remove();
    $(".spinner-border").remove();
  });
}

function cargarValvoline() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasValvoline", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".valvoline").clone().removeClass("valvoline");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      if (data[i].id.substring(0, 2) == "01") {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21).toFixed(0));
      } else {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      }
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".valvolineOfertas").append(divCompetencia);
    }
    $("#plantilla3").remove();
  });
}

function cargarValvolineVarios() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasValvolineVarios", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".valvolineVarios")
        .clone()
        .removeClass("valvolineVarios");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].web);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".valvolineOfertasVarios").append(divCompetencia);
    }
    $("#plantilla8").remove();
  });
}

function cargarMotul() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasMotul", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".motul").clone().removeClass("motul");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".motulOfertas").append(divCompetencia);
    }
    $("#plantilla4").remove();
  });
}

function cargarTotal() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasTotal", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".total").clone().removeClass("total");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      // $(divCompetencia).find(".precio").text("Consultar");
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".totalOfertas").append(divCompetencia);
    }
    $("#plantilla5").remove();
  });
}

function cargarPuma() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasPuma", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".puma").clone().removeClass("puma");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].d);
      if (data[i].id.slice(-3) == "205" || data[i].id.slice(-2) == "20") {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21).toFixed(0));
      } else {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      }
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".pumaOfertas").append(divCompetencia);
    }

    $("#plantilla17").remove();
  });
}

function cargarSelenia() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasSelenia", function (data) {
    for (i = 1; i < data.length; i++) {
      var divCompetencia = $(".selenia").clone().removeClass("selenia");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia).find(".detalle").text(data[i].web);
      if (
        data[i].id.substring(0, 5) == "BALDE" ||
        data[i].id.substring(0, 5) == "TAMBO"
      ) {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21).toFixed(0));
      } else {
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      }
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".seleniaOfertas").append(divCompetencia);
    }
    $("#plantilla6").remove();
  });
}

function cargarRemateMercaderia() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/remateMercaderia", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".remateMercaderia")
        .clone()
        .removeClass("remateMercaderia");
      $(divCompetencia).find(".titulo").text(data[i].id);
      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21 * 0.7).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".rematesMercaderia").append(divCompetencia);
    }
    $("#plantilla13").remove();
  });
}

function cargarOfertasVarias() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasVarias", function (data) {
    for (i = 0; i < data.length; i++) {
      var divCompetencia = $(".ofertaVarias")
        .clone()
        .removeClass("ofertaVarias");
      $(divCompetencia).find(".titulo").text(data[i].web);

      $(divCompetencia)
        .find(".precio")
        .text("$" + (data[i].p * 1.21 * 0.9).toFixed(0));
      $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
      $(".ofertasVarias").append(divCompetencia);
    }
    $("#plantilla9").remove();
  });
}

function cargarVinto() {
  //busca en el backend todas las ofertas
  $.getJSON(server + "/ofertasVinto", function (data) {
    for (i = 0; i < data.length; i++) {
      if (data[i].stock > 12) {
        var divCompetencia = $(".ofertaVinto")
          .clone()
          .removeClass("ofertaVinto");
        $(divCompetencia).find(".titulo").text(data[i].web);
        $(divCompetencia).find(".detalle").text(data[i].d);
        $(divCompetencia)
          .find(".precio")
          .text("$" + (data[i].p * 1.21).toFixed(0));
        $(divCompetencia).find(".imagenKit").attr("src", data[i].img);
        $(".ofertasVinto").append(divCompetencia);
      }
    }
    $("#plantilla10").remove();
  });
}

var z = 0;

$(document).ready(function () {
  $("#imagenPromo").click(function () {
    z = z + 1;
    if (z % 2 != 0) {
      var elemento = document.getElementById("imagenPromo");
      elemento.style.transform = "scale(5)";
      elemento.style.transition = "0s";
      $("#imagenPromo").css("cursor", "zoom-out");
      elemento.style.margin = "auto";
      elemento.style.position = "absolute";
      elemento.style.right = "0";
      elemento.style.left = "0";
      elemento.style.zIndex = "50";
      $("#titulo").css("z-index", "0");
    }
    if (z % 2 == 0) {
      var elemento = document.getElementById("imagenPromo");
      if (window.matchMedia("(max-width: 730px)").matches) {
        elemento.style.transform = "scale(1.3)";
      } else {
        elemento.style.transform = "scale(2)";
      }
      $("#imagenPromo").css("cursor", "zoom-in");
      elemento.style.position = "relative";
      $("#titulo").css("z-index", "0");
    }
  });
});

cargarOfertasFram();
cargarKits();
cargarValvoline();
cargarMotul();
cargarTotal();
cargarSelenia();
cargarOfertasMensuales();
cargarValvolineVarios();
cargarOfertasVarias();
cargarVinto();
cargarRemateMercaderia();
cargarPuma();
