/* 
fichero con codigo javascript
alumno:
fecha:
*/

var cad=prompt("ingrese un mensaje:","");
alert(cad+" (es el mensaje que usted acaba de ingresar)");
cad="Gracias por decirnos "+cad;
document.getElementById("ubicacion1").innerHTML = cad;
