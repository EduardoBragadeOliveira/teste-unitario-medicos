import { Consulta } from './Consulta';
import { Medico } from './Medico';
import { Paciente } from './Paciente';
import { Pessoa } from './Pessoa';

const dataAtual = new Date();

const dataAnterior = new Date(dataAtual.getTime());

dataAnterior.setDate(dataAnterior.getDate() - 1);

const dataPosterior = new Date(dataAtual.getTime());

dataPosterior.setDate(dataPosterior.getDate() + 1);

const paciente_eduardo = new Paciente('Eduardo', 123, 'ABC123', 111);

const medico_lucas = new Medico('Lucas', 321, '555ABC');

describe('Data de consulta', () => {

    test('Erro se a data for anterior ao dia atual no constructor', () => {
        expect(() => new Consulta(dataAnterior, paciente_eduardo, medico_lucas)).toThrow(Error);
    });

    test('Erro se a data for igual ao dia atual no constructor', () => {
        expect(() => new Consulta(dataAtual, paciente_eduardo, medico_lucas)).toThrow(Error);
    });

    test('Não jogar erro e não passar no teste se a data for posterior ao dia atual no constructor', () => {
        expect(() => new Consulta(dataPosterior, paciente_eduardo, medico_lucas)).toThrow(Error);
    });
});