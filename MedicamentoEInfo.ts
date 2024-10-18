import { Medicamento } from "./Medicamento";

export class MedicamentoEInfo {
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
    
    public validacaoAnvisa(med: String): void {

        const medANVISA: Array<Medicamento> = [
            new Medicamento ('Naproxeno', 400),
            new Medicamento ('Ibuprofeno', 600),
            new Medicamento ('Cetoprofeno', 150),
            new Medicamento ('Paracetamol', 750),
            new Medicamento ('Amoxicilina', 500) ,
            new Medicamento ('Simeticona', 40),
            ] 
            
        const encontrado = medANVISA.some(
            (item) => item.nomeMed.toLowerCase() === med.toLowerCase()
        )
    
        if(!encontrado){
          throw new Error("O remédio não está na lista da ANVISA");
        }
    }
}