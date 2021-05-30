/* 
condicional multiple javascript
uso del switch..case..default

alumno:
fecha:
*/
  var iniciales;
  iniciales=prompt('Ingrese las 2 primeras letras de un dia de la semana:','');
  switch (iniciales) {
    case 'lu': document.write('lunes');
            break;
    case 'ma': document.write('martes');
            break;
    case 'mi': document.write('miercoles');
            break;
    case 'ju': document.write('jueves');
            break;
    case 'vi': document.write('viernes');
            break;
    case 'sa': document.write('sabado');
            break;
    case 'do': document.write('domingo');
            break;
    default:document.write('debe ingresar solo las letras en minusculas sin espacios.');
  }
	  
			
			
  