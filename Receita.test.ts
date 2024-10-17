import { Consulta } from './Consulta';
import { Medicamento } from './Medicamento';
import { MedicamentoEInfo } from './MedicamentoEInfo';
import { Medico } from './Medico';
import { Paciente } from './Paciente';
import { Receita } from './Receita';

const dataAtual = new Date();

const dataPosterior = new Date(dataAtual.getTime());

dataPosterior.setDate(dataPosterior.getDate() + 1);

const data2DiasPosterior = new Date(dataAtual.getTime());

data2DiasPosterior.setDate(data2DiasPosterior.getDate() + 2);

const dataMaisUmMinuto = new Date(dataAtual.getTime());

dataMaisUmMinuto.setMinutes(dataMaisUmMinuto.getMinutes() + 1);

const dataPosteriorMaisUmMinuto = new Date(dataPosterior.getTime());

dataPosteriorMaisUmMinuto.setMinutes(dataPosteriorMaisUmMinuto.getMinutes() + 1);

const paciente_eduardo = new Paciente('Eduardo', 123, 'ABC123', 111);

const medico_lucas = new Medico('Lucas', 321, '555ABC');

const consulta_1 = new Consulta(dataPosterior, paciente_eduardo, medico_lucas);

const consulta_2 = new Consulta(data2DiasPosterior, paciente_eduardo, medico_lucas);

const consulta_3 = new Consulta(dataMaisUmMinuto, paciente_eduardo, medico_lucas);

const dipirona = new Medicamento('Dipirona', 1000);

const dipirona_infos = new MedicamentoEInfo(dipirona, 8, '2 comprimidos');

describe('Dia de emissão da receita', () => {

    test('Erro se o dia da emissão da receita não estiver vinculada ao dia da consulta no constructor', () => {
        expect(() => new Receita(dataAtual, consulta_1, [dipirona_infos])).toThrow(Error);
    });

    test('Se mudar a consulta e sua respectiva data (setter), a emissão deverá acompanhar', () => {
        const receita = new Receita(dataPosterior, consulta_1, [dipirona_infos])

        receita.consulta = consulta_2;

        expect(receita.dataEmissao).toBe(data2DiasPosterior);
    });

    test('Se mudar a data de emissão para 1 minuto após a consulta (setter), eu posso vincular sem erro', () => {
        const receita = new Receita(dataPosterior, consulta_1, [dipirona_infos])

        receita.dataEmissao = dataPosteriorMaisUmMinuto;

        expect(receita.dataEmissao).toBe(dataPosteriorMaisUmMinuto);
    });

    test('Se mudar a data de emissão para o dia anterior a consulta (setter), a data do constructor permanecerá', () => {
        const receita = new Receita(dataPosterior, consulta_1, [dipirona_infos])

        try {
            receita.dataEmissao = dataAtual;
        } catch (e) {
        }

        expect(receita.dataEmissao).toBe(dataPosterior);
    });
});