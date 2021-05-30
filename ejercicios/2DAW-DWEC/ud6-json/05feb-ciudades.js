		const API_KEY = '250dc721cec7fe2dc83b7dc772168d52';
		var id="2514256";

		// elegir ciudad
		$(document).ready(function() {
			$( "select" ).change(function () {
				var str = "";
				$( "select option:selected" ).each(function() {
					str += $( this ).text() + "-" + $( this ).val() + " ";
				});
				$( "#msg" ).text( str );
				// aquí la consulta con Ajax al servicio de https://openweathermap.org/appid
				id=$( this ).val();
				getWeatherByCityId(id);
			})
		});
		
		/**
		 *
		 *
		 * @param {number} id
		 */
		 // Función hecha por el alumno Alberto Gómez García cedida para uso pedagógico. 
		function getWeatherByCityId(id) {
			if (id){
				var request = new XMLHttpRequest();
				request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + API_KEY, true);
				request.onreadystatechange = function(aEvt) {
					if (request.readyState == 4) {
						if (request.status == 200) {
							var response = JSON.parse(request.responseText);
							if (response) {
								showData(response.main.temp, response.main.humidity, response.wind.speed, response.visibility, response.main.feels_like);
							}
						} else {
							console.log("Error loading page\n");
						}
					}
				};
				request.send(null);
			} 
		}

		/**
		 *
		 *
		 * @param {number} temperatura
		 * @param {number} humedad
		 * @param {number} viento
		 * @param {number} visibilidad
		 * @param {string} sensacion_termica
		 */
		 // Función hecha por el alumno Alberto Gómez García cedida para uso pedagógico. 
		 function showData(temperatura, humedad, viento, visibilidad, sensacion_termica) {
			document.getElementById('temperatura').innerHTML = "Temperatura: " + temperatura + " ºF";
			document.getElementById('humedad').innerHTML = "Humedad: " + humedad + " g/m3";
			document.getElementById('viento').innerHTML = "Velocidad viento: " + viento+ " kms/h";
			document.getElementById('visibilidad').innerHTML = "Visibilidad: " + visibilidad;
			document.getElementById('sensacion_termica').innerHTML = "Sensación térmica: " + sensacion_termica+ " ºF";
			document.getElementById('datos').style.visibility = 'visible';
		}
