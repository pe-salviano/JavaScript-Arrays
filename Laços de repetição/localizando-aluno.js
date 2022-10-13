const alunos = ["João", "Juliana", "Caio", "Ana"];
const mediasDosAlunos = [10, 7, 9, 6];

//includes -> sempre retorna um booleano (verdadeiro ou falso)
// indexOf -> retorna numero

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
    return (
      //[0]   [3]
      listaDeNotasEAlunos[0][indice] +
      ", sua média é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não cadastrado no sistema";
  }
};

console.log(exibeNomeNota("Pedro"));
