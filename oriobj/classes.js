class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    detalhesdoCarro(){
    return `Carro: ${this.marca}, ${this.modelo}, ${this.ano}`
}
}

const meuCarro = new Carro("porsche", "spider 911", 2007)
console.log(meuCarro.detalhesdoCarro())
