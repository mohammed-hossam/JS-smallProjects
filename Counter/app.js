const counter = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
console.log(btns);

let Count = 0;

btns.forEach((item) => {
  item.addEventListener('click', function (e) {
    const classesArray = e.target.classList;
    console.log(e.target.classList);
    console.log(item.classList);
    if (classesArray.contains('increase')) {
      Count++;
    } else if (classesArray.contains('decrease')) {
      Count--;
    } else {
      Count = 0;
    }
    counter.textContent = Count;
    //     console.log(test);
  });
});

// dec.addEventListener('click', function decFn() {});

// reset.addEventListener('click', function resetFn() {
//   counter.textContent = '0';
// });

// inc.addEventListener('click', function incFn() {
//   Count++;
//   console.log(Count);
//   counter.textContent = Count;
// });
