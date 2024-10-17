import { Consulta } from "./Consulta";
import { MedicamentoEInfo } from './MedicamentoEInfo';

export class Receita {
    private _dataEmissao: Date;
    private _consulta: Consulta;
    private _medicamentosEInfos: MedicamentoEInfo[];

    constructor(dataEmissao: Date, consulta: Consulta, medicamentosEInfos: MedicamentoEInfo[]) {
        this._consulta = consulta;
        this._dataEmissao = dataEmissao;
        this.verificarDataEmissao(consulta, dataEmissao);
        this._medicamentosEInfos = medicamentosEInfos;
    }

    get dataEmissao(): Date {
        return this._dataEmissao;
    }

    set dataEmissao(dataEmissao: Date){
        this.verificarDataEmissao(this._consulta, dataEmissao);
        this._dataEmissao = dataEmissao;
    }

    get consulta(): Consulta {
        return this._consulta;
    }

    set consulta(consulta: Consulta){
        this._consulta = consulta;
        this._dataEmissao = consulta.dataConsulta;
    }

    get medicamentosEInfos(): MedicamentoEInfo[] {
        return this._medicamentosEInfos;
    }

    adicionarMedicamentoEInfo(medicamentoEInfo: MedicamentoEInfo) {
        this._medicamentosEInfos.push(medicamentoEInfo);
    }

    removerMedicamentoEInfo(medicamentoEInfo: MedicamentoEInfo) {
        let index = this._medicamentosEInfos.indexOf(medicamentoEInfo);
        if (index >= 0) {
            this._medicamentosEInfos.splice(index, 1);
        }
    }

    public verificarDataEmissao(consulta: Consulta, dataEmissao: Date): void{
        if(consulta.dataConsulta.getDate() !== dataEmissao.getDate() || consulta.dataConsulta.getMonth() !== dataEmissao.getMonth() || consulta.dataConsulta.getFullYear() !== dataEmissao.getFullYear()){
            throw new Error("A data de emissão da receita não está vinculada a uma consulta no mesmo dia.");
        }
    }
}