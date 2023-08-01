const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
var second = 0
var micond = 0
var horand = 0
var fleg = false;

function tratarNumero (numero){
  return numero<10? '0' + numero : numero;
}

function mostrarHora(){
  data = new Date();
  h = tratarNumero(data.getHours());
  min = tratarNumero(data.getMinutes());
  secon = tratarNumero(data.getSeconds());

  horas.textContent = h;
  minutos.textContent = min;
  segundos.textContent = secon;
}

function iniciciarContagem(){
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
  fleg += 1;
  if (fleg === 1) { // Verifica se fleg é igual a 1 antes de criar um novo intervalo
    intervalId = setInterval(iniciciarContagem, 1000); // Armazena o ID do setInterval em intervalId
  }
}

function pausarTimer() {
  clearInterval(intervalId); // Limpa o intervalo usando o ID armazenado em intervalId
  fleg = 0; // Reinicia a flag para que, se ligar novamente, um novo intervalo possa ser criado
}


