const botaoMago = document.getElementById('mago');
const tooltipMago = document.getElementById('tooltipMago');

botaoMago.addEventListener("click", () => {
    tooltipMago.style.display = "block";
});

closeMago.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o clique no "X" feche e reabra o tooltip
  tooltipMago.style.display = "none";
});

const botaoCavaleiro = document.getElementById('cavaleiro');
const tooltipCavaleiro = document.getElementById('tooltipCavaleiro');

botaoCavaleiro.addEventListener("click", () => {
    tooltipCavaleiro.style.display = "block";
});

closeCavaleiro.addEventListener("click", (event) => {
  event.stopPropagation();
  tooltipCavaleiro.style.display = "none";
});

const botaoArqueiro = document.getElementById('arqueiro');
const tooltipArqueiro = document.getElementById('tooltipArqueiro');

botaoArqueiro.addEventListener("click", () => {
    tooltipArqueiro.style.display = "block";
});

closeArqueiro.addEventListener("click", (event) => {
  event.stopPropagation();
  tooltipArqueiro.style.display = "none";
});


const botaoBarbaro = document.getElementById('barbaro');
const tooltipBarbaro = document.getElementById('tooltipBarbaro');

botaoBarbaro.addEventListener("click", () => {
  tooltipBarbaro.style.display = "block";
});

closeBarbaro.addEventListener("click", (event) => {
  event.stopPropagation();
  tooltipBarbaro.style.display = "none";
});

const botaoMitica = document.getElementById('cmitica');
const tooltipMitica = document.getElementById('tooltipMitica');

botaoMitica.addEventListener("click", () => {
  tooltipMitica.style.display = "block";
});

closeMitica.addEventListener("click", (event) => {
  event.stopPropagation();
  tooltipMitica.style.display = "none";
});

function fecharTooltips() {
  tooltipMago.style.display = "none";
  tooltipCavaleiro.style.display = "none";
  tooltipArqueiro.style.display = "none";
  tooltipBarbaro.style.display = "none";
  tooltipMitica.style.display = "none";
}

// Evento global de clique para fechar tooltips ao clicar fora
document.addEventListener('click', (event) => {
  if (!botaoMago.contains(event.target) && !tooltipMago.contains(event.target) &&
      !botaoCavaleiro.contains(event.target) && !tooltipCavaleiro.contains(event.target) &&
      !botaoArqueiro.contains(event.target) && !tooltipArqueiro.contains(event.target) &&
      !botaoBarbaro.contains(event.target) && !tooltipBarbaro.contains(event.target) &&
      !botaoMitica.contains(event.target) && !tooltipMitica.contains(event.target)) {
      fecharTooltips();
  }
});
