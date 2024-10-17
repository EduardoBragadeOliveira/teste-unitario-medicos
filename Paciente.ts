import { Pessoa } from "./Pessoa"

export class Paciente extends Pessoa {
    private _senha: string

    get senha(): string{
        return this._senha
    }
    
    set senha(senha: string){
        this._senha = senha
    }

    constructor(nome: string, cpf: number, senha: string){
        super(nome,cpf)
        this._senha = senha
    }
}