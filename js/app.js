function Sumar() {
    //.value nos devuelve el valor que se encuentra en la etiqueta
    //los id los transformamos en variables
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector("#num2").value);

    const resultado = document.querySelector('#resultado');
    
    resultadoOperacion = num1 + num2;
    
    resultado.textContent = resultadoOperacion;

}

function Restar() {
    //.value nos devuelve el valor que se encuentra en la etiqueta
    //los id los transformamos en variables
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);

    const resultado = document.querySelector('#resultado');
    
    resultadoOperacion = num1 - num2;
   

    resultado.textContent = resultadoOperacion;

}