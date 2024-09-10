// //
// let imgPrincipal
// let imgCaracteristicas

// const personagens = document.querySelectorAll('.personagem');

// personagens.forEach(personagem => {
//   const imgPrincipal = personagem.querySelector('img:first-child'); // Select first child image (main character)
//   const imgCaracteristicas = personagem.querySelector('.caracteristicas');

//   imgPrincipal.addEventListener('mouseover', () => {
//     imgCaracteristicas.style.display = 'block';
//   });

//   imgPrincipal.addEventListener('mouseout', () => {
//     imgCaracteristicas.style.display = 'none';
//   });
// });

const botao = document.getElementById('arqueiro'); // Substitua 'minhaImagem' pelo ID da sua imagem

const tooltip = document.getElementById("tooltip");

botao.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

botao.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});

