export class Pessoa {
    private _nome: string
    private _cpf: number

    constructor(nome: string, cpf: number) {
        this._nome = nome
        this._cpf = cpf
    }

    get nome(): string {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get cpf(): number {
        return this._cpf
    }
    
    set cpf(cpf: number) {
        this._cpf = cpf
    }
}