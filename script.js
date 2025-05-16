// Função para calcular o tempo desde a data específica
function calcularTempo(dataInicial, elemento) {
  const atualizarTempo = () => {
    const dataInicio = new Date(dataInicial);
    const dataAtual = new Date();

    const diffTime = Math.abs(dataAtual - dataInicio);

    const diffSegundos = Math.floor(diffTime / 1000);
    const anos = Math.floor(diffSegundos / (60 * 60 * 24 * 365));
    const meses = Math.floor((diffSegundos % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    const dias = Math.floor((diffSegundos % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const horas = Math.floor((diffSegundos % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((diffSegundos % (60 * 60)) / 60);
    const segundos = diffSegundos % 60;

    const texto = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    document.getElementById(elemento).textContent = texto;
  };

  // Atualiza o tempo imediatamente e a cada segundo
  atualizarTempo();
  setInterval(atualizarTempo, 1000);
}

// Adicione as datas aqui
calcularTempo("2025-04-13T16:00:00", "data5");
calcularTempo("2024-12-17T11:00:00", "data1");
calcularTempo("2024-03-19T20:00:00", "data2");
calcularTempo("2023-04-30T19:00:00", "data3");
calcularTempo("2022-09-29T21:00:00", "data4");
