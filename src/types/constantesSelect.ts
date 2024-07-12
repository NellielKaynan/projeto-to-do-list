// os types permitem tipar de forma personalizada e sua estrutura é semelhante a de um objeto
export type PrioridadeSelect = {
  texto: string
  value: 'alta' | 'média' | 'baixa'
}

export type CategoriaSelect = {
  texto: string
  value: 'pessoal' | 'família' | 'saúde' | 'estudos' | 'carreira' | 'trabalho'
}