// Widget para aumentar/diminuir fonte dos .outro h1 e p
const minH1 = 1.5; // em rem
const maxH1 = 8;
const minP = 1;
const maxP = 3;
let h1Size = 6; // valor inicial em rem (igual ao seu CSS)
let pSize = 2;  // valor inicial em rem (igual ao seu CSS)

function applyFontSizes() {
  document.querySelectorAll('.outro h1').forEach(h1 => {
    h1.style.fontSize = h1Size + 'rem';
  });
  document.querySelectorAll('.outro p').forEach(p => {
    p.style.fontSize = pSize + 'rem';
  });
}

document.getElementById('font-increase').onclick = () => {
  if (h1Size < maxH1) h1Size += 0.5;
  if (pSize < maxP) pSize += 0.2;
  applyFontSizes();
};
document.getElementById('font-decrease').onclick = () => {
  if (h1Size > minH1) h1Size -= 0.5;
  if (pSize > minP) pSize -= 0.2;
  applyFontSizes();
};

// Aplica ao carregar a página
applyFontSizes();