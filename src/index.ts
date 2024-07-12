import { criaOpcoesDoSelect, limpaFormulario } from './form'
import { enviaTarefa, listaTarefas } from './tarefas'
import { PRIORIDADES, CATEGORIAS } from './constantes/constantes'
import { mudaParaLightMode, mudaParaDarkMode } from './menu'

criaOpcoesDoSelect('prioridade', PRIORIDADES)
criaOpcoesDoSelect('categoria', CATEGORIAS)

listaTarefas()

const formularioTarefas = document.querySelector('#formularioTarefas') as HTMLFormElement | null
formularioTarefas?.addEventListener('submit', (e) => enviaTarefa(e))

const botaoLimpar = document.querySelector('#botaoLimpar') as HTMLButtonElement | null
botaoLimpar?.addEventListener('click', limpaFormulario)

const botaoLightMode = document.querySelector('.botoes-mode--light') as HTMLButtonElement | null
botaoLightMode?.addEventListener('click', mudaParaLightMode)

const botaoDarkMode = document.querySelector('.botoes-mode--dark') as HTMLButtonElement | null
botaoDarkMode?.addEventListener('click', mudaParaDarkMode)
