import { Consulta } from './Consulta';
import { Medico } from './Medico';
import { Paciente } from './Paciente';
import { Pessoa } from './Pessoa';

const dataAtual = new Date();

const dataAnterior = new Date(dataAtual.getTime());

dataAnterior.setDate(dataAnterior.getDate() - 1);

const dataPosterior = new Date(dataAtual.getTime());

dataPosterior.setDate(dataPosterior.getDate() + 1);

const data2DiasPosterior = new Date(dataAtual.getTime());

data2DiasPosterior.setDate(data2DiasPosterior.getDate() + 2);

const dataMaisUmMinuto = new Date(dataAtual.getTime());

dataMaisUmMinuto.setMinutes(dataMaisUmMinuto.getMinutes() + 1);

const paciente_eduardo = new Paciente('Eduardo', 123, 'ABC123', 111);

const medico_lucas = new Medico('Lucas', 321, '555ABC');

describe('Data de consulta', () => {

    test('Erro se a data for anterior ao dia atual no constructor', () => {
        expect(() => new Consulta(dataAnterior, paciente_eduardo, medico_lucas)).toThrow(Error);
    });

    test('Erro se a data for igual ao dia atual no constructor', () => {
        expect(() => new Consulta(dataAtual, paciente_eduardo, medico_lucas)).toThrow(Error);
    });

    test('Vincular a data posta para a data de consulta caso seja uma data posterior a atual, no constructor', () => {
        const consulta_teste = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);
        expect(consulta_teste.dataConsulta).toBe(dataPosterior);
    });

    test('Erro se a data for anterior ao dia atual no setter, não alterando a do constructor', () => {
        const consulta_teste = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);
        
        try {
            consulta_teste.dataConsulta = dataAnterior;
        } catch (e) {
        }
        
        expect(consulta_teste.dataConsulta).toBe(dataPosterior);
    });

    test('Erro se a data for igual ao dia atual no setter, não alterando a do constructor', () => {
        const consulta_teste = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);
        
        try {
            consulta_teste.dataConsulta = dataAtual;
        } catch (e) {
        }
        
        expect(consulta_teste.dataConsulta).toBe(dataPosterior);
    });

    test('Alterar data da consulta caso continue sendo uma data posterior, no setter', () => {
        const consulta_teste = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);
        
        try {
            consulta_teste.dataConsulta = data2DiasPosterior;
        } catch (e) {
        }
        
        expect(consulta_teste.dataConsulta).toBe(data2DiasPosterior);
    });

});