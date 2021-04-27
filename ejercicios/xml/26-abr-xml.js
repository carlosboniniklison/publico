/* 
JavaScript / jQuery
web o pagina:
autor:
fecha:
resumen:
*/
function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde GitHub");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
  xhr.send();
}

function leerXML0() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde GitHub con atributos");
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
  xhr.send();
}

function leerXML1() {
  // lee desde Axartec.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde Axartec");
    }
  };
  xhr.open("GET", "https://appslab.axartec.com/pruebas/registrados.xml", true);
  xhr.send();
}

function leerXML2() {
  // lee desde aquí.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this,"Desde aquí");
    }
  };
  xhr.open("GET", "registrados.xml", true);
  xhr.send();
}

function miFuncion(xml,fuente) {
  var i;
  var xmlDoc = xml.responseXML;
  var tabla=fuente + "<br/>";
  var x = xmlDoc.getElementsByTagName("usuario");
  tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
    tabla += "<tr><td>" +
    x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  tabla += "</table>"
  document.getElementById("contenidoXML").innerHTML = tabla;
}
