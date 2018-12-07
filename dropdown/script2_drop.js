$(document).ready(function(){
    $('#example').on('click','button',function(){
           // console.log('click'); Para verificar se o botão esta funcionando
        var selected = $('#place option:selected');
        var value = selected.val();   
        var price = selected.data('price');

        console.log(value);
        console.log(price);
        console.log(selected.attr('data-price'));

        if(price){

            $('#result').html(value + ' '+ price);
        }

    });

});