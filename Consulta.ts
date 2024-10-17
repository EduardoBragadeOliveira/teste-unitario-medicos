import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Consulta {
    private _dataConsulta: Date;
    private _paciente: Paciente;
    private _medico: Medico;

    constructor(dataConsulta: Date, paciente: Paciente, medico: Medico) {
        this.verificarDataConsulta(dataConsulta);
        this._dataConsulta = dataConsulta;
        this._paciente = paciente;
        this._medico = medico;
    }

    get dataConsulta(): Date {
        return this._dataConsulta;
    }

    set dataConsulta(dataConsulta: Date){
        this.verificarDataConsulta(dataConsulta);
        this._dataConsulta = dataConsulta;
    }

    get paciente(): Paciente {
        return this._paciente;
    }

    set paciente(paciente: Paciente){
        this._paciente = paciente;
    }

    get medico(): Medico {
        return this._medico;
    }

    set medico(medico: Medico){
        this._medico = medico;
    }

    public verificarDataConsulta(dataConsulta: Date): void{
        const dataAtual = new Date();

        if(dataAtual.getTime() >= dataConsulta.getTime()){
            throw new Error("O dia da consulta é inválido.");
        }
    }
}