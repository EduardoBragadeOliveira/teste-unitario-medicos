import { MedicamentosEInfos } from "./MedicamentosEInfos";
import { Medicamento } from "./Medicamento";

const novoMed1 = new MedicamentosEInfos(new Medicamento('Aspirina', 600), 8, '1 comprimido a cada 3h')
const novoMed2 = new MedicamentosEInfos(new Medicamento('Ibuprofeno', 400), 8, '2 gotas a cada 4h' )
const novoMed3 = new MedicamentosEInfos(new Medicamento('PaRacETamOl', 250), 5, '20 gotas a cada 3h' )

describe('Teste da função validação', () => {

  test('medicamento não aprovado pela ANVISA', () => {
    expect(novoMed1).toThrow(Error)
  })

  test('medicamento aprovado pela ANVISA', () => {
    expect(novoMed2).toBe(true)
  })

  test('medicamento aprovado pela ANVISA ignorando as letras maiúsculas e minúsculas', () => {
    expect(novoMed3).toBe(true)
  })  

})