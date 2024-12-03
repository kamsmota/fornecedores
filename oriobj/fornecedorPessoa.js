import Fornecedor from "./fornecedor"

class FornecedorPessoa extends Fornecedor{
    constructor(nome="sem nome", fone="(11)23456-7890", rg="", cpf="")
    super(nome, fone){
        this.rg = rg
        this.cpf=cpf

    }

    setRg(rg){
        this.rg = rg
    }

    setCpf(cpf){
        this.cpf = cpf
    }

    getRg(){
        return this.rg
    }
    
    getCpf(){
        return this.cpf
    }
}