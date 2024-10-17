import { Medicamento } from "./Medicamento";
import { Medicamentos } from "./Anvisa";

export class MedicamentosEInfos {
    private _medicamento: Medicamento;
    private _qtdHorasConsumo: number;
    private _dosagem: string;

    constructor(medicamento: Medicamento, qtdHorasConsumo: number, dosagem: string) {
        this._medicamento = medicamento;
        this._qtdHorasConsumo = qtdHorasConsumo;
        this._dosagem = dosagem;
        this.validacaoAnvisa(medicamento.nomeMed)
    }

    get medicamento(): Medicamento {
        return this._medicamento;
    }

    set medicamento(medicamento: Medicamento){
        this.validacaoAnvisa(medicamento.nomeMed)
        this._medicamento = medicamento;
    }

    get qtdHorasConsumo(): number {
        return this._qtdHorasConsumo;
    }

    set qtdHorasConsumo(qtdHorasConsumo: number){
        this._qtdHorasConsumo = qtdHorasConsumo;
    }

    get dosagem(): string {
        return this._dosagem;
    }

    set dosagem(dosagem: string){
        this._dosagem = dosagem;
    }
    
    public validacaoAnvisa = (med: String): void => {
        if(!Medicamentos.some(
            (item) => item.nomeMed.toLowerCase() === (med.toLowerCase()) 
        )){
            throw new Error("O remédio não está na lista da ANVISA");
        }
    }
}