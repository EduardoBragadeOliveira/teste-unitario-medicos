import { MedicamentoEInfo } from "./MedicamentoEInfo";
import { Medicamento } from "./Medicamento";

describe('Teste da função validação', () => {

  test('medicamento não aprovado pela ANVISA', () => {
    expect(() => { new MedicamentoEInfo(new Medicamento('Aspirina', 600), 8, '1 comprimido a cada 3h') }).toThrow(Error)
  })

  test('medicamento aprovado pela ANVISA', () => {
    const medicamento = new Medicamento('Ibuprofeno', 600)
    const medicamentoEInfo = new MedicamentoEInfo(medicamento, 8, '2 gotas a cada 4h')
    expect(medicamentoEInfo.medicamento).toEqual(medicamento)
  })

    test('medicamento aprovado pela ANVISA ignorando as letras maiúsculas e minúsculas', () => {
      const medicamento = new Medicamento('PaRacETamOl', 250)
      const medicamentoEInfo = new MedicamentoEInfo(medicamento, 8, '2 gotas a cada 4h')
    expect(medicamentoEInfo.medicamento).toEqual(medicamento)
   })  

})