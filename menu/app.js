const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

function displayMenu(menu) {
  let finalData = menu.map((ele) => {
    return ` <article class="menu-item">
    <img src="${ele.img}" alt="menu item" class="photo" />
    <div class="item-info">
    <header>
    <h4>${ele.title}</h4>
    <h4 class="price">$${ele.price}</h4>
    </header>
    <p class="item-text">
    ${ele.desc}
    </p>
    </div>
    </article>`;
  });
  sectionCenter.innerHTML = finalData.join('');
}

window.addEventListener('DOMContentLoaded', function () {
  // to render btns

  // get array of name of btns
  const allCategories = menu.reduce(
    (accumilator, ele) => {
      if (!accumilator.includes(ele.category)) {
        accumilator.push(ele.category);
      }
      return accumilator;
    },
    ['all']
  );
  //another solution with set
  // const allCategories = menu.map((ele) => {
  //   return ele.category;
  // });
  // console.log(allCategories);
  // const removeDuplicate = [...new Set(allCategories)];
  // console.log(removeDuplicate);

  //render btns
  const finalBtns = allCategories.map((ele) => {
    return `<button type="button" class="filter-btn" data-id=${ele}>${ele}
    <button>`;
  });
  btnContainer.innerHTML = finalBtns.join('');

  // add functionalty to btns
  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log(filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      if ('all' === btn.dataset.id) {
        displayMenu(menu);
        return;
      }
      newFilteredMenu = menu.filter((ele) => {
        // console.log(e.currentTarget.dataset);
        // console.log(ele.category);
        return ele.category === btn.dataset.id;
      });
      // console.log(newFilteredMenu);
      displayMenu(newFilteredMenu);
    });
  });
  //render  main-section on firt load
  displayMenu(menu);
});
