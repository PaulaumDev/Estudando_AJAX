// AJAX Demo
function loadDoc(divParaAlterar) {
  const demoDiv = document.getElementById(divParaAlterar);
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     demoDiv.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

// Tia Gui Demo
function alterarPeloNumero() {
  let numero = String(document.getElementById('numero').value).trim();
  let resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Buscando dados…';

  // Dados fictícios
  const dados = {
    '1': 'Dados para 1: "Maçã"',
    '2': 'Dados para 2: "Banana"',
    '3': 'Dados para 3: "Cereja"',
    '4': 'Dados para 4: "Damasco"',
    '5': 'Dados para 5: "Uva"',
    '6': 'Dados para 6: "Pera"',
    '7': 'Dados para 7: "Laranja"',
    '8': 'Dados para 8: "Melancia"',
    '9': 'Dados para 9: "Abacaxi"',
    '10': 'Dados para 10: "Manga"'
    // Continuei a lista
  };

  // Mapeamento determinístico de cores por índice
  const cores = {
    '1': '#ff6b6b',   // vermelho claro
    '2': '#ffd166',   // amarelo
    '3': '#6be5a8',   // verde claro
    '4': '#6bb0ff',   // azul claro
    '5': '#c08cff',   // roxo
    '6': '#ff9f80',   // salmão
    '7': '#00d4a6',   // verde forte
    '8': '#ffde59',   // amarelo pastel
    '9': '#8bd3ff',   // azul pastel
    '10': '#ffd1dc'   // rosa claro
  };

  // Utilitário simples para escolher cor do texto (preto ou branco) dependendo do brilho da cor de fundo
  function escolherCorDeTexto(hex) {
    if (!hex) return '#000';
    // Remove # se existir
    const h = hex.replace('#', '');
    // Converte para RGB
    const r = parseInt(h.substring(0,2), 16);
    const g = parseInt(h.substring(2,4), 16);
    const b = parseInt(h.substring(4,6), 16);
    // Calcula luminância relativa (fórmula simples)
    const luminancia = (0.299*r + 0.587*g + 0.114*b) / 255;
    return luminancia > 0.6 ? '#000' : '#fff';
  }

  // Simulação de solicitação assíncrona
  setTimeout(() => {
    if (numero !== '' && dados[numero]) {
      resultadoDiv.textContent = dados[numero];
      const color = cores[numero];
      if (color) {
        // aplica cor de fundo e escolhe cor do texto para contraste
        resultadoDiv.style.background = color;
        resultadoDiv.style.color = escolherCorDeTexto(color);
      } else {
        // se não houver cor definida, remove estilos inline para voltar ao CSS
        resultadoDiv.style.background = '';
        resultadoDiv.style.color = '';
      }
    } else {
      resultadoDiv.textContent = `Nenhum dado foi encontrado ou você não digitou um número. Numero: ${numero}`;
      // reseta o estilo para o padrão definido em CSS
      resultadoDiv.style.background = '';
      resultadoDiv.style.color = '';
    }
  }, 1000); // simula 1 segundo (1000 milisegundos) de espera
};

function limparResultado() {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.textContent = 'Aguardando nova busca';
  resultadoDiv.style.background = '';
  resultadoDiv.style.color = '';
}