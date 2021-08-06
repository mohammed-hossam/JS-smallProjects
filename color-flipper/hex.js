const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function btnFn() {
  let newColor = '#';
  for (i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hex.length);
    newColor += `${hex[randomNumber]}`;
    console.log(newColor);
  }
  console.log(newColor);
  const finalColor = (color.textContent = newColor);
  document.body.style.background = finalColor;
});
