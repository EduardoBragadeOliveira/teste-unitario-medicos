  interface IMedicamento {
    nomeMed: string
    qtdmg?: number
}

 export const Medicamentos: Array<IMedicamento> = [
{ nomeMed: 'Naproxeno' },
{ nomeMed: 'Ibuprofeno', qtdmg: 600 },
{ nomeMed: 'Cetoprofeno', qtdmg: 150 },
{ nomeMed: 'Paracetamol', qtdmg: 750 },
{ nomeMed: 'Amoxicilina', qtdmg: 500 },
{ nomeMed: 'Simeticona', qtdmg: 40 },
] 
