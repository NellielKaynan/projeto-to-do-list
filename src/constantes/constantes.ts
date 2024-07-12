import { PrioridadeSelect, CategoriaSelect } from '../types/constantesSelect'

export const PRIORIDADES: Record<string, PrioridadeSelect> = {
  alta: {
    texto: 'Alta',
    value: 'alta',
  },
  media: {
    texto: 'Média',
    value: 'média',
  },
  baixa: {
    texto: 'Baixa',
    value: 'baixa',
  },
}

export const CATEGORIAS: Record<string, CategoriaSelect> = {
  pessoal: {
    texto: 'Pessoal',
    value: 'pessoal',
  },
  familia: {
    texto: 'Família',
    value: 'família',
  },
  saude: {
    texto: 'Saúde',
    value: 'saúde',
  },
  estudos: {
    texto: 'Estudos',
    value: 'estudos',
  },
  carreira: {
    texto: 'Carreira',
    value: 'carreira',
  },
  trabalho: {
    texto: 'Trabalho',
    value: 'trabalho',
  },
}