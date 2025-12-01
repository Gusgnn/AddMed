let atendimentos = [];

export function adicionarAtendimento(atendimento) {
  atendimentos.push(atendimento);
}

export function listarAtendimentos() {
  return atendimentos;
}
