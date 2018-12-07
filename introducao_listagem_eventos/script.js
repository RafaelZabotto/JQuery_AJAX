$(document).ready(function(){
    //1º Exemplo: $('#example').on('click',function(){
    $('#example').on('click','button.switch', function(){
        //console.log(this);
        console.log($(this));

        //$(this).addClass('highlighted'); //vai atribuir pelo click as caracteristicas do highlighted, porem não volta
        //1º Exemplo: $(this).toggleClass('highlighted'); //permite atribuir e desatribuir pelo click

        //2º Exemplo, com um botão implementado
        $(this).parent().toggleClass('highlighted');
    })
});