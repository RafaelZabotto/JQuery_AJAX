$(document).ready(function(){

    //Selecionando partes pelo DOM.
    //utilização do find() para encontrar uma parte específica
    result = $("#animals").find('.creature');
    console.log(result);
    //Resultado pode ser visto no console.log F12.

    //Elementos filhos
    //Acessa elementos que são especificações da superclasse
    result = $('#animals').children('.creature');
    console.log(result);

    //Elementos first(), last(), prev() e next()
    //first(), last()
    var result = $('#animals').children().first().children('.creature').last();
    console.log(result);

    //prev()
    result = $('#animals').children().first().children().last().prev().prev();
    console.log(result);

    //next()
    var result = $('#animals').children().first().children('.creature').first().next();
    console.log(result);
});