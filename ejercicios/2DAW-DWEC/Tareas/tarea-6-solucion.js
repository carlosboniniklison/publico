/* 
SOLUCION tarea 4
estructuras secuenciales y repetitivas javascript
además del do..while están el while y el for
alumno:
fecha:
*/
  var bb;
  var hst;
  var valido;
  var hsd;
  var mensaje;

/* cargar el saldo del bonobus */

  valido=0;
  do {
	bb=parseInt(prompt('Saldo de su bonobús:',''));
	if (bb>=0&&hsm<=8)
	{
		valido=1;
	}
  } while(valido==0);
  
/* leo las horas de la tarde hasta que sea un valor aceptable */
  valido=0;
  while(valido==0) {
	hst=parseInt(prompt('Horas de estudio por la tarde:',''));
	if (hst>=0&&hst<=8)
	{
		valido=1;
	}
  }  
 
/* calculo y muestro las horas trabajadas */
  hsd=hsm+hst;
  mensaje='Ha estudiado '+hsd+' horas<br>(a lo largo del día)';
 
  document.getElementById("ubicacion1").innerHTML = mensaje;  	
  