


//ACCORDION MENU
function accordionMenu(){
let acc = document.getElementsByClassName("accordion");
	for (var i = 0; i < acc.length; i++) {
	 	acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			  panel.style.maxHeight = null;
			} else {
			  panel.style.maxHeight = panel.scrollHeight + "px";
			} 
	 	});
	}
}






// //WHATSAPP FUNCTION
// $(function () {
//         $('#WAButton').floatingWhatsApp({
//           phone: '5491165106333', //WhatsApp Business phone number
//            //headerTitle: 'Escribinos!', //Popup Title
//           popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
//           showPopup: true, //Enables popup display
//           buttonImage: '<img src="images/whatsappModern.png" />', //Button Image
//           //headerColor: 'crimson', //Custom header color
//           backgroundColor: 'crimson', //Custom background button color
//           position: "right" //Position: left | right
   
//         });
// })()



// Al finalizarse de cargar el DOM:

function cargarOfertas () {
  //busca en el backend todas las ofertas
  $.getJSON(('https://spreadsheets.google.com/feeds/cells/1HcLINUnm07IbDFz4Fn7R_B-XWsmscfiBn6Yo79Op4H8/1/public/full?alt=json'), function (data) {
  var faqs=[]
  var numeroDePreguntas = data.feed.entry.length;
  for (var i = 2; i < numeroDePreguntas; i++) {
    faqs.push(data.feed.entry[i].gs$cell.$t);
  }
  console.log(faqs);
  console.log(faqs.length);
  insertarpreguntas(faqs);
});
}



//INSERTAR PREGUNTAS EN DIV "campoPreguntas"
function insertarpreguntas(faqs){
  var node = document.getElementById("campoPreguntas")
  console.log(faqs);
	for (var i = 0; i<faqs.length; i=i+2){
		let newButton = document.createElement("button");
		newButton.className="accordion";
		newButton.innerHTML=faqs[i];
		node.appendChild(newButton);
		let newPanel= document.createElement("div");
		newPanel.className="panelfaq";
		newPanel.innerHTML=faqs[i+1];
		newPanel.style.color="#0f0f0f";
		node.appendChild(newPanel);
  }
  accordionMenu();
}



cargarOfertas();
