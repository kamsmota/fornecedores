class Fornecedor{
    constructor(nome = "sem nome", fone="(11)23456-7890"){
    this.nome= nome;
    this.fone = fone;
}
setNome(nome){
    this.nome = nome;
}
setFone(fone){
    this.fone = fone;
}
getNome(){
    return this.nome;
}
getFone(){
    return this.fone;
}
}



