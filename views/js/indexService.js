const constantes ={
  nosotros: 
  "Somos una empresa familiar y referente dentro del segmento de filtros y lubricantes.\
  Con mas de 35 años de experiencia en el mercado de automotriz, contamos con mas de 300 \
  clientes activos,  que confían en nosotros desde nuestros inicios",
  
  tituloServicios1:
  "VENTA AL POR MAYOR DE FITLROS Y LUBRICANTES",
  descServicios1: 
  "Distribución al por mayor de filtros, lubricantes, aditivos y productos afines. Atendemos estaciones de servicios,\
   lubricentros, casa de repuestos, empresas de transportes y flotas de vehiculos",
  
  tituloServicios2:
  "LINEA PESADA Y AGRO",
  descServicios2:
  "Atencion a la industria y afines. Filtros y lubricantes para motores, compresores y generadores.",
  
  tituloServicios3:
  "Filtros de aire tubulares y de habitáculo",
  descServicios3:
  "Servicio de fabricación de filtros de aire especiales para maquinaria pesada",

  tituloServicios4:
  "Asesoramiento tecnico",
  descServicios4:
  "Servicio de asesoramiento para la apertura de lubricentros. Facilidades en la compra inicial de mercaderia. ",

}

 //WHATSAPP FUNCTION
			$(function () {
        $('#WAButton').floatingWhatsApp({
          phone: '5491165106333', //WhatsApp Business phone number
           //headerTitle: 'Escribinos!', //Popup Title
          popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
          showPopup: true, //Enables popup display
          buttonImage: '<img src="images/whatsappModern.png" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          backgroundColor: 'crimson', //Custom background button color
          position: "right" //Position: left | right
   
        });
      })

// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes.nosotros);
inserstartextos("tituloServicios1", constantes.tituloServicios1);
inserstartextos("descServicios1",   constantes.descServicios1);
inserstartextos("tituloServicios2", constantes.tituloServicios2);
inserstartextos("descServicios2",   constantes.descServicios2);
inserstartextos("tituloServicios3", constantes.tituloServicios3);
inserstartextos("descServicios3",   constantes.descServicios3);
inserstartextos("tituloServicios4", constantes.tituloServicios4);
inserstartextos("descServicios4",   constantes.descServicios4);



window.onload = wpp();


