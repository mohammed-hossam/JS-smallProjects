const tabBtn = document.querySelectorAll('.tab-btn');
const btnContainer = document.querySelector('.btn-container');
const aboutContent = document.querySelector('.about-content');
const content = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function (e) {
  //na5od balna hena 3mleen target msh currentTarget 3shan ana mtar el about kolo fa 3yz target ele hdos 3leh 2yan kan hwa eh wele hwa hena hykon el btnisA
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //   for btns
    tabBtn.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    //     for content
    content.forEach((ele) => {
      ele.classList.remove('active');
      const wantedElement = document.getElementById(id);
      wantedElement.classList.add('active');
    });
  }
});
