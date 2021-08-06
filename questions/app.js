//*using selectors inside the element:
//*hena ele hysl en msh hnst5dm document.btn enma el element ele m5taro  wele 3ayz gwah el btn y3ny hykon taregtedelement.btn badal document.btn

const questions = document.querySelectorAll('.question');

questions.forEach((taregtedElement) => {
  const btn = taregtedElement.querySelector('.question-btn');
  console.log(btn);

  btn.addEventListener('click', function () {
    taregtedElement.classList.toggle('show-text');

    //   hena 3ayz 2qarn kol el elements(questions) bl element ele dost 3leh b7es 2shof ele msh days 3lehom w 2shel mnhom show-text lw 3ndhom
    questions.forEach((question) => {
      if (question !== taregtedElement) {
        question.classList.remove('show-text');
      }
    });
  });
});

//* traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((ele) => {
//   ele.addEventListener('click', function (e) {
//     console.log(e.currentTarget.parentElement.parentElement);
//     console.log(e.currentTarget.parentNode.parentNode);
//     e.currentTarget.parentNode.parentNode.classList.toggle('show-text');
//   });
// });
