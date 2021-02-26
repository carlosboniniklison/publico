//CREACION DEL OBJETO Y PROPIEDADES

const Coches = [{
		marca: "Ferrari",
		modelo: "Scaglietti",
		fabricacion: 2010
	},
	{
		marca: "BMW",
		modelo: "Z4",
		fabricacion: 2010
	},
	{
		marca: "Seat",
		modelo: "Toledo",
		fabricacion: 1999
	},
	{
		marca: "Fiat",
		modelo: "500",
		fabricacion: 1995
	},
	];

	//CREACION DE LA TABLA

	var cuerpoTabla = document.getElementById("cuerpoTabla");

	for (let i = 0; i < Coches.length; i++) {
		let marca = '<td>' + Coches[i].marca + '</td>';
		let modelo = '<td>' + Coches[i].modelo + '</td>';
		let fabricacion = '<td>' + Coches[i].fabricacion + '</td>';

		cuerpoTabla.innerHTML += '<tr>' + marca + modelo + fabricacion + '</tr>';
	}

	//ESTILO DE LA TABLA

	var tabla = document.getElementById("miTabla");

	function estilo(){
		tabla.style.textAlign = "center";
	}

	estilo();

	function estiloRojo(){
		tabla.style.backgroundColor = "#FF637D";
	}

	function estiloAzul(){
		tabla.style.backgroundColor = "#66D7D1";
	}

	function estiloVerde(){
		tabla.style.backgroundColor = "#BDECB6";
	}
