/* 
guardar datos por tiempo indefinido
usando solamente HTML5
(sin cookies)

alumno:
fecha:
*/
function cuentaClics() {
  if(typeof(Storage) !== "undefined") {
    if (sessionStorage.contadorclics) {
      sessionStorage.contadorclics = Number(sessionStorage.contadorclics)+1;
    } else {
      sessionStorage.contadorclics = 1;
    }
    document.getElementById("resultado").innerHTML = "Haz pinchado el botón " + sessionStorage.contadorclics + " veces en esta sesión.";
  } else {
    document.getElementById("resultado").innerHTML = "Su navegador no soporta web storage...";
  }
}