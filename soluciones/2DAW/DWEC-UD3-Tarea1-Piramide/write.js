var linea="";
for (var i = 1; i<10; i++) {
//Convierto el número i a texto para evitar que sume
  linea = i.toString();
  for(var j=1; j<i; j++){
    linea += i;
  }
  document.write("<br>" + linea);
  linea = "";
}
