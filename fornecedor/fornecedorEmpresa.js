class FornecedorEmpresa extends Fornecedor {
    #ie;   // atributos privados
    #cnpj;

    constructor(nome = "Sem nome", fone = "(00)00000000", ie = "", cnpj = "") {
        super(nome, fone); // chama o construtor da classe generalizada (Fornecedor)
        this.#ie = ie;
        this.#cnpj = cnpj;
    }

    // getters
    getIe() {
        return this.#ie;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    // setters
    setIe(ie) {
        this.#ie = ie;
    }

    setCNPJ(cnpj) {
        this.#cnpj = cnpj;
    }
}
