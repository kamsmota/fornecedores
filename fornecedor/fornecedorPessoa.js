class FornecedorPessoa extends Fornecedor {
    #rg;   // atributos privados
    #cpf;

    constructor(nome = "Sem nome", fone = "(00)00000000", rg = "", cpf = "") {
        super(nome, fone); // chama o construtor da classe generalizada (Fornecedor)
        this.#rg = rg;
        this.#cpf = cpf;
    }

    // getters
    getRg() {
        return this.#rg;
    }

    getCpf() {
        return this.#cpf;
    }

    // setters
    setRg(rg) {
        this.#rg = rg;
    }

    setCpf(cpf) {
        this.#cpf = cpf;
    }
}
