import { ConstructorObjetivo } from '../types/constructorObjetivo'

export class Objetivo {
  titulo: string
  categoria: string
  statusObj: string
  descricao: string
  imagem: string

  constructor({ titulo, categoria, statusObj, descricao, imagem }: ConstructorObjetivo) {
    this.titulo = titulo
    this.categoria = categoria
    this.statusObj = statusObj
    this.descricao = descricao
    this.imagem = imagem
  }

  mudarBackgroundColor(): string {
    if (this.statusObj === 'Concluído') {
      return 'container__objetivo--concluido'
    } else if (this.statusObj === 'Andamento') {
      return 'container__objetivo--andamento'
    } else {
      return 'container__objetivo--iniciar'
    }
  }
}
