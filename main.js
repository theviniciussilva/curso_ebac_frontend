// Atribuindo variavéis
const form = document.getElementById("form");
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemFalha = document.querySelector('.message-error');
let funciona = false;

function calculaCampo(){    // funcão serve para fazer a mesma COISA toda hora
    
    let valor1 = campoA.value;
    let valor2 = campoB.value;
    let numero1 = parseInt(campoA.value);
    let numero2 = parseInt(campoB.value);
    return numero2 > numero1;
}

form.addEventListener('submit', function(e)
//nessa funcão o 'e' é de evento e é o parametro/objeto de evento ele guarda as informações do meu submit do meu form //
{   
    e.preventDefault(); // previne o formulário a fazer a sua função default que é recarregar a página
    funciona = calculaCampo(campoB.value) // atribuindo o valor da variavel a uma variavel boleana usando a função calcula tempo para isso comparando se B é maior que A se sim vai ser true
        if(funciona){
            const mensagemSucesso = document.querySelector('#mensagem-sucesso');
             //não esquecer de declarar variavéis antes
            mensagemSucesso.style.display ='flex'; 
            campoA.value = "";
            campoB.value = "";
        }
        else{
            campoA.classList.add('error');
            
        } 
        
})
    campoA.addEventListener('keyup', function(e){
        funciona = calculaCampo(e.target.value)
        if(!funciona){
            mensagemFalha.style.display = 'flex';

        }
        else{
            mensagemFalha.style.display = '';
            campoA.classList.remove('error');
        }
        })
