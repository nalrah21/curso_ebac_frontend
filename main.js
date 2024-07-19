$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    $('header button').click(function(){
        $('form').slideDown();
        $('ul').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
        $('ul').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeAtividade = $('#nova-atividade').val();
        console.log(nomeAtividade);
        const novoItem = $('<li></li>');
        $(`<p>${nomeAtividade}</p>`).appendTo(novoItem);
        if(nomeAtividade != ''){
            $(novoItem).appendTo('ul');
        }
        $('#nova-atividade').val('');
    })

    $('ul').on('click', 'p', function() {
        $(this).toggleClass('riscado');
    });

})