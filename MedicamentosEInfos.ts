import { Medicamento } from "./Medicamento";

export class MedicamentosEInfos {
    private _medicamento: Medicamento;
    private _qtdHorasConsumo: number;
    private _dosagem: string;

    constructor(medicamento: Medicamento, qtdHorasConsumo: number, dosagem: string) {
        this._medicamento = medicamento;
        this._qtdHorasConsumo = qtdHorasConsumo;
        this._dosagem = dosagem;
    }

    get medicamento(): Medicamento {
        return this._medicamento;
    }

    set medicamento(medicamento: Medicamento){
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
}