$(document).ready(function(){
    //mudar para keyup ou keydown para ver a diferença
    $('#example').on('keyup','input',function(){
        $('#result').html('Your name is: ' + $(this).val());
    });
});