import { Pessoa } from "./Pessoa";

export class Medico extends Pessoa {
    private _crm: string;


     get crm(): string {
        return this._crm;
    }
     set crm(crm: string) {
        this._crm = crm;
    }
    
    constructor(nome: string, cpf: number, crm: string){
      super(nome,cpf)
      this._crm = crm
    }
}