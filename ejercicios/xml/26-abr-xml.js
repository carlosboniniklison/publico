/* 
JavaScript / jQuery
web o pagina:
autor:
fecha:
resumen:
*/
function leerXML() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var tabla="<tr><th>Empleado</th><th>Clave</th></tr>";
  var x = xmlDoc.getElementsByTagName("usuario");
  for (i = 0; i <x.length; i++) { 
    tabla += "<tr><td>" +
    x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("contenidoXML").innerHTML = tabla;
}
