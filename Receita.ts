import { Consulta } from "./Consulta";
import { MedicamentosEInfos } from "./MedicamentosEInfos";

export class Receita {
    private _dataEmissao: Date;
    private _consulta: Consulta;
    private _medicamentosEInfos: MedicamentosEInfos;

    constructor(dataEmissao: Date, consulta: Consulta, medicamentosEInfos: MedicamentosEInfos) {
        this._consulta = consulta;
        this._dataEmissao = dataEmissao;
        this.verificarDataEmissao(consulta, dataEmissao);
        this._medicamentosEInfos = medicamentosEInfos;
    }

    get dataEmissao(): Date {
        return this._dataEmissao;
    }

    set dataEmissao(dataEmissao: Date){
        this._dataEmissao = dataEmissao;
    }

    get consulta(): Consulta {
        return this._consulta;
    }

    set consulta(consulta: Consulta){
        this._consulta = consulta;
    }

    get medicamentosEInfos(): MedicamentosEInfos {
        return this._medicamentosEInfos;
    }

    set medicamentosEInfos(medicamentosEInfos: MedicamentosEInfos){
        this._medicamentosEInfos = medicamentosEInfos;
    }

    public verificarDataEmissao(consulta: Consulta, dataEmissao: Date): void{
        if(consulta.dataConsulta.getTime() != dataEmissao.getTime()){
            throw new Error("A data de emissão da receita não está vinculada a uma consulta no mesmo dia.");
        }
    }
}