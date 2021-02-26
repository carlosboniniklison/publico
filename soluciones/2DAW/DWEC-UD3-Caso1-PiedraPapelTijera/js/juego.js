var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(min, max){
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);

    if(eleccionUsuario == 0){// yo cojo piedra 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>Pierdes</h1>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>Ganas</h1>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>Es un empate</h1>';
                }
            }
        } 
    }

    if(eleccionUsuario == 1){// yo cojo papel 
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>Pierdes</h1> ';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>Ganas</h1>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>Es un empate</h1>'; 
                }
            }
        }
    }

    if(eleccionUsuario == 2) {//yo cojo tijera 
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>Ganas</h1>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>Pierdes</h1>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>Es un empate</h1>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}