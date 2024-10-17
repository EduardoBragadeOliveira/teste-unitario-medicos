export class Medicamento{
    private _nomeMed: string
    private _qtdmg: number

    get nomeMed(): string {
        return this._nomeMed
    }

    set nomeMed(nomeMed: string){
        this._nomeMed = nomeMed
    }
   
     get qtdmg(): number {
        return this._qtdmg
    }
     set qtdmg(qtdmg: number) {
        this._qtdmg = qtdmg
    }
    

    constructor(nomeMed: string, qtdmg: number){
        this._nomeMed = nomeMed
        this,this._qtdmg = qtdmg
    }
}