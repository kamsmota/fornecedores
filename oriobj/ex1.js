class Gestante{
    constructor(nome, peso, altura){
    this.nome = nome
    this.peso = peso
    this.altura = altura
}
caracteristicasGestante(){
    return "Gestante se chama ${this.nome}, com ${this.peso} peso e ${this.altura} metros de altura"
}

imc(){
    imc = this.peso/(this.altura*this.altura)
    return this.imc
}
}

console.log()