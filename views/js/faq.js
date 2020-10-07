
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


//DATA PARA PARRAFO DE INTRODUCION
function cargarIntro () {
  //busca en el backend todas las ofertas
  $.getJSON(('https://spreadsheets.google.com/feeds/cells/1HcLINUnm07IbDFz4Fn7R_B-XWsmscfiBn6Yo79Op4H8/2/public/full?alt=json'), function (data) {
  var parrafos=[]
  var numeroDeParrafos = data.feed.entry.length;
  for (var i = 0; i < numeroDeParrafos; i++) {
    parrafos.push(data.feed.entry[i].gs$cell.$t);
  }
  insertarParrafos(parrafos);
});
}


//AL FINALIZAR DE CARGAR DOM BUSCA DATA EN GOOGLE
function cargarPreguntas () {
  //busca en el backend todas las ofertas
  $.getJSON(('https://spreadsheets.google.com/feeds/cells/1HcLINUnm07IbDFz4Fn7R_B-XWsmscfiBn6Yo79Op4H8/1/public/full?alt=json'), function (data) {
  var faqs=[]
  var numeroDePreguntas = data.feed.entry.length;
  for (var i = 2; i < numeroDePreguntas; i++) {
    faqs.push(data.feed.entry[i].gs$cell.$t);
  }
  insertarpreguntas(faqs);
});
}

//INSERTAR PARRAFOS EN INTRO
function insertarParrafos(elemento){
  var node = document.getElementById("campoParrafo");
  for (var i=0; i<elemento.length;i++){
    let parrafo=document.createElement("h4");
    parrafo.style.color="#ffffff";
    parrafo.innerHTML=elemento[i];
    node.appendChild(parrafo);
  } 
}


//INSERTAR PREGUNTAS EN DIV "campoPreguntas"
function insertarpreguntas(faqs){
  var node = document.getElementById("campoPreguntas")

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


cargarIntro();
cargarPreguntas();
