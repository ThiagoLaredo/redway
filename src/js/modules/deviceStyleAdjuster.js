// modules/deviceStyleAdjuster.js
export function adjustContainerWidth() {
  var pixelRatio = window.devicePixelRatio;
  var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

  const container = document.querySelector('.container');
  const protecoes = document.querySelectorAll('.protecao'); // Seleciona todos os elementos com a classe 'protecao'

  if (!container) {
      console.error("Elemento .container não encontrado!");
  } else {
      if (isMacOS && pixelRatio > 1) {
          container.style.maxWidth = '1200px';
          protecoes.forEach(protecao => protecao.style.minHeight = '47vh'); // Altura menor para MacBook
      } else {
          container.style.maxWidth = '1800px';
          protecoes.forEach(protecao => protecao.style.minHeight = '34vh'); // Altura maior para outros dispositivos
      }
  }
}
