// Cherche le bouton par son ID
const btn = document.getElementById("colorBtn");

// Quand on clique sur le bouton
btn.addEventListener("click", function() {
  // Liste de couleurs possibles
  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
  
  // Choisir une couleur au hasard
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Appliquer la couleur au fond de la page
  document.body.style.backgroundColor = randomColor;
});
// Menu responsive
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active"); // ajoute/enlève la classe active

}