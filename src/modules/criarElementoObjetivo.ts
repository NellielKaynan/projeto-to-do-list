import { ConstructorObjetivo } from '../types/constructorObjetivo'
import { Objetivo } from './objetivo'

document.addEventListener('DOMContentLoaded', () => {
  const formularioObjetivos = document.querySelector('#objetivoForm') as HTMLFormElement | null
  if (!formularioObjetivos) return

  formularioObjetivos.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const titulo = (document.querySelector('#tituloObjetivo') as HTMLInputElement).value
    const categoria = (document.querySelector('#categoriaObjetivo') as HTMLSelectElement).value
    const statusObj = (document.querySelector('#statusObjetivo') as HTMLSelectElement).value
    const descricao = (document.querySelector('#descricaoObjetivo') as HTMLTextAreaElement).value
    const inputImagem = document.querySelector('#imagemObjetivo') as HTMLInputElement
    const arquivoImagem = inputImagem.files ? inputImagem.files[0] : null

    if (titulo && categoria && statusObj && descricao && arquivoImagem) {
      const reader = new FileReader()
      reader.onload = () => {
        const imagemUrl = reader.result as string

        const elementosNovoObjetivo: ConstructorObjetivo = {
          titulo: titulo,
          categoria: categoria,
          statusObj: statusObj,
          descricao: descricao,
          imagem: imagemUrl,
        }

        const novoObjetivo = new Objetivo(elementosNovoObjetivo)
        criarObjetivo(novoObjetivo)
      }

      reader.readAsDataURL(arquivoImagem)
    } else {
      alert('Preencha todos os dados do formulário.')
    }
  })

  function criarObjetivo(novoObjetivo: Objetivo): void {
    const ul = document.querySelector('#objetivosItens') as HTMLUListElement | null
    if (!ul) return

    const li = document.createElement('li')
    li.classList.add('container__objetivo', novoObjetivo.mudarBackgroundColor())

    li.innerHTML = `
      <div class="objetivo__titulo">${novoObjetivo.titulo}</div>
      <div class="objetivo__topicos">
        <div class="objetivo__topico">${novoObjetivo.categoria}</div>
        <div class="objetivo__topico">${novoObjetivo.statusObj}</div>
      </div>
      <div>${novoObjetivo.descricao}</div>
      <img class="objetivo__imagem" src="${novoObjetivo.imagem}" alt="${novoObjetivo.titulo}">
    `

    ul.appendChild(li)
  }
})
