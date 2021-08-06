const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function btnFn() {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const finalColor = (color.textContent = colors[randomNumber]);
  console.log(finalColor);
  document.body.style.background = finalColor;
});
