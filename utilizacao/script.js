$(document).ready(function(){
    //caminho do código

    //$('#container').text('hello');
    //$('.class1,.class2').addClass('highlighted'); //Seleciona multiplos elementos e adiciona(addClass) as caracteristicas do highlighted
    $('#listing li').addClass('highlighted'); //seleciona todos os li e adiciona as caracteristicas do highlighted

    /*é possível aplicar essa mesma ideia para inputs, que no caso ficaria;
    - $('input[required]').addClass('highlighted'); aplica as propriedades do highlighted nos campos requeridos
    - $('input[placeholder=Email]').addClass('highlighted'); aplica ao campo Email
    - $('input[placeholder*=Name]').addClass('highlighted');
    */
});