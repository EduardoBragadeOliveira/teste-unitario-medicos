import { Pessoa } from "./Pessoa"

export class Paciente extends Pessoa {
    private _numeroSUS: number
    private _senha: string

    constructor(nome: string, cpf: number, senha: string, numeroSUS: number){
        super(nome,cpf)
        this._senha = senha;
        this._numeroSUS = numeroSUS;
    }

    get senha(): string{
        return this._senha;
    }
    
    set senha(senha: string){
        this._senha = senha;
    }

    get numeroSUS(): number{
        return this._numeroSUS;
    }
    
    set numeroSUS(numeroSUS: number){
        this._numeroSUS = numeroSUS;
    }
}