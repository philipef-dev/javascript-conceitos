function calcularDiasEntreDatas(dia, mes, ano) {
  const hoje = new Date();

  if (!ano) {
    ano = hoje.getFullYear();
  }

  const dataAnterior = new Date(ano, mes - 1, dia);

  const diferencaMilissegundos = hoje - dataAnterior;

  const dias = Math.floor(diferencaMilissegundos / (1000 * 60 * 60 * 24));

  return {
    dataAnterior: dataAnterior.toLocaleString('pt-BR'),
    hoje: hoje.toLocaleString('pt-BR'),
    dias: dias   
  };
}

const resultado1 = calcularDiasEntreDatas(10, 1)
console.log('Resultado foi', resultado1.dias);
