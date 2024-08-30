document.addEventListener('DOMContentLoaded', function(){

    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const link = document.querySelector('.profile-link');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');


    fetch('https://api.github.com/users/theviniciussilva')
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            name.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            repositorios.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url;


        })
})