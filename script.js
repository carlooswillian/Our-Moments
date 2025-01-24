// Função para calcular o tempo desde a data específica
function calcularTempo(dataInicial, elemento) {
  const dataInicio = new Date(dataInicial);
  const dataAtual = new Date();

  const diffTime = Math.abs(dataAtual - dataInicio);
  const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const anos = Math.floor(diffDias / 365);
  const meses = Math.floor((diffDias % 365) / 30);
  const dias = diffDias % 30;

  const texto = `${anos} anos, ${meses} meses e ${dias} dias`;
  document.getElementById(elemento).textContent = texto;
}

// Adicione as datas aqui
calcularTempo("2024-12-17", "data1");
calcularTempo("2024-03-19", "data2");
calcularTempo("2023-04-30", "data3");
calcularTempo("2022-09-29", "data4");
