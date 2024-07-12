import { TarefaDaLista } from './types/tarefaDaLista'

export async function capturaTarefasDaAPI(): Promise<TarefaDaLista[]> {
  const resposta = await fetch('http://localhost:3000/tasks')
  const dadosConvertidos: TarefaDaLista[] = await resposta.json()

  return dadosConvertidos
}

export async function cadastraTarefaNaAPI(titulo: string, prioridade: string, descricao: string) {
  const resposta = await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      titulo: titulo,
      prioridade: prioridade,
      descricao: descricao,
    }),
  })

  const respostaConvertida: TarefaDaLista = await resposta.json()

  return respostaConvertida
}

export async function deletaTarefaNaAPI(id: string): Promise<void> {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
  })
}
