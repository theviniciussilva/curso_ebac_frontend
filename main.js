const alunos = [
    {nome: 'Vinicius', nota: 8},
    {nome: 'Antonio', nota: 7},
    {nome: 'João', nota: 3},
    {nome: 'Maria', nota: 5}
]
                        //obj
alunos.forEach(function(aluno){
    if(aluno.nota >= 6){
        console.log(`Parabens você foi aprovado ${aluno.nome}`)
    }
})


// for(let i = 0; i < alunos.length; i++){
//     if(alunos[i].nota >= 6){
//         console.log(`Você foi aprovado ${alunos[i].nome}`);
//     }
// }