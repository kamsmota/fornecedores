class Fornecedor {
    #nome; // atributos privados
    #fone;

    // construtor com parametros dados no documento
    constructor(nome = "Sem nome", fone = "(00)00000000") {
        this.#nome = nome;
        this.#fone = fone;
    }

    // construtor com parametros
    constructor(nome, fone) {
        return new Fornecedor(nome, fone);
    }

    // getters
    getNome() {
        return this.#nome;
    }

    getFone() {
        return this.#fone;
    }

    // setters
    setNome(nome) {
        this.#nome = nome;
    }

    setFone(fone) {
        this.#fone = fone;
    }
}
