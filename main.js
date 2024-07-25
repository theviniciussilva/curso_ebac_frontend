$(document).ready(function(){
    const atividades = [];
    $('#main-form').submit(function(e){
        e.preventDefault();
        adicionaItem();
    })
    function adicionaItem(){
        const inputAtividade = $('#input-atividade').val();
        if(atividades.includes(inputAtividade)){
            alert('já existe essa atividade');
            $('#input-atividade').val("");
        }
        else{
            atividades.push(inputAtividade);
            const novoLi = $('<li style="display: none;"></li>').text(inputAtividade);
            $(novoLi).appendTo('ul');
            $(novoLi).fadeIn(500);
            $('#input-atividade').val("");
        }   
    }
    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });
})