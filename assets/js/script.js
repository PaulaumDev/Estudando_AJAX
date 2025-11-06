// AJAX Demo
function loadDoc(divParaAlterar) {
  const demoDiv = document.getElementById(divParaAlterar);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     demoDiv.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// Tia Gui Demo
function oi() {
  const numero = document.getElementById('numero').value;
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Buscando dados…';

  // Simulação de solicitação assíncrona
  setTimeout(() => {
    // Dados fictícios
    const dados = {
      1: 'Dados para 1: “Maçã”',
      2: 'Dados para 2: “Banana”',
      3: 'Dados para 3: “Cereja”', 
      // … até 10
    };
    
    if (dados[numero]) {
      resultadoDiv.textContent = dados[numero];
    } else {
      resultadoDiv.textContent = 'Nenhum dado encontrado para o número ' + numero;
    }
  }, 1000); // simula 1 segundo (1000 milisegundos) de espera
};