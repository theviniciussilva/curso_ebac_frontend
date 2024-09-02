function Pessoa(nome, idade, peso, inteligencia){
    this.nome = nome,
    this.idade = idade,
    this.peso = peso;
    let _inteligencia = inteligencia;
    this.falar = function(){
        if(_inteligencia > 6){
            console.log("eu falo com muita inteligencia");
            return _inteligencia
        }
        if(_inteligencia > 1){
            console.log("eu falo com inteligencia");
            return _inteligencia
        }
        else{
            console.log("Falo sem inteligencia");
            return _inteligencia
        }
    }
    this.setInteligencia = function(qi){
        if(typeof qi === 'number'){
            _inteligencia = qi;
        }
    }
    this.estudo = function(){
        const novoQi = _inteligencia * 3;
        this.setInteligencia(novoQi)
    }

}
function Bibliotecario(nome){
    Pessoa.call(this, nome, 30, 70, 6)

    this.estudo = function(){
        const novoQi = this.falar() * 6;
        this.setInteligencia(novoQi)
    }    
}
function Esportista(nome){
    Pessoa.call(this, nome, 19,80,1);
}



//instancia
const pessoa1 = new Pessoa("Vinicius", 18, 80, 1);
const pessoa2 = new Bibliotecario("Pedro");
const pessoa3 = new Esportista("Joao");

pessoa1.falar();
pessoa1.estudo();
pessoa1.falar();
pessoa2.falar();
pessoa2.estudo();
pessoa2.falar();
pessoa3.falar();

