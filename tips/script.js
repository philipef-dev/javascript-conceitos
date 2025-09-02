// Vamos supor que eu tenha um Array de datas e quero fazer com uma função me traga o mês atual 

const meses = ['marco', 'fevereiro', 'janeiro', 'junho', 'maio', 'abril', 'agosto', 'julho', 'outubro', 'setembro', 'dezembro', 'novembro'];

const mesAtual = meses[new Date().getMonth()]

// Fazendo dessa forma não importa se o Array de meses estiver desordenado
// const mesAtual = new Date().toLocaleString('default', {
//     month: 'long'
// })

console.log(mesAtual)