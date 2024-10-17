import { Consulta } from './Consulta';
import { Medicamento } from './Medicamento';
import { MedicamentosEInfos } from './MedicamentosEInfos';
import { Medico } from './Medico';
import { Paciente } from './Paciente';
import { Receita } from './Receita';

const dataAtual = new Date();

const dataPosterior = new Date(dataAtual.getTime());

dataPosterior.setDate(dataPosterior.getDate() + 1);

const paciente_eduardo = new Paciente('Eduardo', 123, 'ABC123', 111);

const medico_lucas = new Medico('Lucas', 321, '555ABC');

const consulta_1 = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);

const dipirona = new Medicamento('Dipirona', 1000);

const dipirona_infos = new MedicamentosEInfos(dipirona, 8, '2 comprimidos');

describe('Dia de emissão da receita', () => {

    test('Erro se o dia da emissão da receita não estiver vinculada ao dia da consulta no constructor', () => {
        expect(() => new Receita(dataAtual, consulta_1, dipirona_infos)).toThrow(Error);
    });

    // test('Erro se a consulta for marcada na mesma data de hoje', () => {
    //     expect(() => new Consulta(dataAtual, paciente_eduardo, medico_lucas)).toThrow(Error);
    // });
});