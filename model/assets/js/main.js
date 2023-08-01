const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
var second = 0
var micond = 0
var horand = 0
var fleg = 0;
var intervalId; // Variável para armazenar o ID do setInterval
var timerEmExecucao = false; // Flag para controlar se o timer está em execução

function tratarNumero (numero){
  return numero<10? '0' + numero : numero;
}

setInterval(function mostrarHora(){
  data = new Date();
  h = tratarNumero(data.getHours());
  min = tratarNumero(data.getMinutes());
  secon = tratarNumero(data.getSeconds());

  horas.textContent = h;
  minutos.textContent = min;
  segundos.textContent = secon;
},1000)

function iniciciarContagem(){
  limparTimer();
  second ++;
  var valor = second <10? '0'+ second: second
  segunsd = second >= 60? micond ++: micond;
  segunsd = second >= 60? second = 0: micond,
  minuts = micond >=60? horand ++: micond;
  minuts = micond >=60? micond = 0: micond;
  horats = horand >=24? horand = 0: horand;
  valor3 = horand <10? '0'+ horand: horand;
  return segundos.textContent = valor, minutos.textContent = tratarNumero(micond), horas.textContent = tratarNumero(horand);
}

function limparTimer(){
  horas.textContent = '00';
  minutos.textContent = '00';
  segundos.textContent = '00';
  window.location.reload()
}


function ligarContagem() {
  if (!timerEmExecucao) { // Verifica se o timer não está em execução antes de criar um novo intervalo
      intervalId = setInterval(iniciciarContagem, 1000); // Armazena o ID do setInterval em intervalId
      timerEmExecucao = true; // Define a flag como true para indicar que o timer está em execução
  }
}

function pausarTimer() {
  if (timerEmExecucao) { // Verifica se o timer está em execução antes de limpar o intervalo
      clearInterval(intervalId); // Limpa o intervalo usando o ID armazenado em intervalId
      timerEmExecucao = false; // Define a flag como false para indicar que o timer está pausado
  }
}


