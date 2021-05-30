/* 
guardar datos por tiempo indefinido
usando solamente HTML5
(sin cookies)

alumno:
fecha:
*/
    window.addEventListener('load', inicio, false);

    function inicio() {
        document.getElementById('guardar').addEventListener('click', guardar, false);
        document.getElementById('traducir').addEventListener('click', recuperar, false);
    }

    function guardar(evt) {
        localStorage.setItem(document.getElementById('ingles').value, document.getElementById('castellano').value);        
        document.getElementById('ingles').value='';
        document.getElementById('castellano').value='';
    }

    function recuperar(evt) {
        if (localStorage.getItem(document.getElementById('ingles').value) == null) 
            alert('No está almacenala la palabra '+document.getElementById('ingles').value);
        else  
            document.getElementById('castellano').value=localStorage.getItem(document.getElementById('ingles').value);
    }
