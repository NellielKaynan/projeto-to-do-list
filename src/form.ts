import { PRIORIDADES, CATEGORIAS } from './constantes/constantes'
import { PrioridadeSelect, CategoriaSelect } from './types/constantesSelect'

//Record é um tipo especial para setarmos um tipo de objeto / void é para funções que não tem retorno, normalmente não precisa por 
export function criaOpcoesDoSelect(idSelecionado: string, opcoes: Record<string, PrioridadeSelect | CategoriaSelect>): void {
  if(!document) return
  const selectCampo = document.getElementById(idSelecionado) as HTMLSelectElement | null // o null é para tratar caso o elemento não seja encontrado
  if (!selectCampo || !selectCampo.checkValidity()) return // condicional para verificar se elemento não existe
  const listaDeOpcoes = Object.value(opcoes)
  listaDeOpcoes.forEach((opcao) => {
    const elementoOpcao = document.createElement('option')
    elementoOpcao.innerText = opcao.texto
    elementoOpcao.value = opcao.value
    selectCampo.appendChild(elementoOpcao)
  })
}

export function limpaFormulario(): void {
  // todos os nulls aqui é pelo menos motivo da linha 7, e as condicionais verificadoras estão da linha 26 a 30
  const titulo = document.querySelector('#titulo') as HTMLInputElement | null
  const prioridade = document.querySelector('#prioridade') as HTMLSelectElement | null
  const descricao = document.querySelector('#descricao') as HTMLTextAreaElement | null
  const categoria = document.querySelector('#categoria') as HTMLSelectElement | null
  const data = document.querySelector('#data') as HTMLInputElement | null

  if (titulo) titulo.value = ''
  if (prioridade) prioridade.value = PRIORIDADES.alta.value
  if (descricao) descricao.value = ''
  if (categoria) categoria.value = CATEGORIAS.pessoal.value
  if (data) data.value = ''
}

const botaoLimpar = document.querySelector('#botaoLimpar')
if (botaoLimpar) {
  botaoLimpar.addEventListener('click', limpaFormulario)
}