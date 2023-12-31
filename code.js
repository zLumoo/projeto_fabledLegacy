// Definindo a data desejada no horário de Brasília (GMT-3)
const dataDesejada = new Date(Date.UTC(2023, 9, 22, 10, 0, 0)); // Mês 9 representa outubro, pois janeiro é o mês 0

// Atualiza o temporizador a cada segundo
const temporizador = setInterval(() => {
    // Obtendo a data e hora atuais em milissegundos
    const agora = new Date().getTime() - 3 * 60 * 60 * 1000; // Ajuste para o horário de Brasília (GMT-3)

    const diferenca = dataDesejada - agora;

    // Cálculos para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('temporizador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Tempo expirado
    if (diferenca < 0) {
        clearInterval(temporizador);
        document.getElementById('temporizador').innerHTML = 'UPDATE RELEASED';
    }
}, 1000); // 1000 milissegundos = 1 segundo
