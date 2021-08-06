// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const wantedHeight = links.getBoundingClientRect().height;

  if (linksContainer.getBoundingClientRect().height === 0) {
    //inlinestyle
    linksContainer.style.height = `${wantedHeight}px`;
  } else {
    //inlinestyle
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const nav = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  // to make fixed nav after scrolling
  const scroll = window.pageYOffset;
  //deh btgeb 7sl scroll 2d eh fa 3ayz 25le lma y7s scroll btol el navbar 27ot fixed postion ll navbar 3n tre2 ene 23ml add l classes
  //   console.log(scroll);
  if (nav.getBoundingClientRect().height < scroll) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }

  //to make btn appear
  if (scroll > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    //3shan 2afel el navbar lma 2dos 3ala 2y link feh
    linksContainer.style.height = 0;

    //hena 3mlt kda 3shan 3ayz 2mn3 el scroll ele by7sl 3shan msh mzbot w 2m3lo ana bnfse
    e.preventDefault();
    //h5tar hena el section ele byshawr 3leh el href fl links bt3ty
    const id = e.currentTarget.getAttribute('href').slice(1);
    console.log(id);
    const wantedSection = document.getElementById(id);
    //b3d kda hgeb mkan el section nfso mn fo2 bs m7tag ashelo el 7eta ele mbwza el donya w heya en el navbar wa5d makan mn e section 3shan y3ny fixed w kda fa m7tag ageb el height bta3o w b3da kda ashelo bs m7tag 2m3l kda lma ykon 2sln fixed fa 23ml if condition 3shan 2shof lw fixed 23ml kda lw msh kda yb2a 3ady 3shan e7na msh 3mleno fixed mn el 2wal by3ml fixed bs lma n3ml sroll shwia t7t.
    const navHeight = nav.getBoundingClientRect().height;
    console.log(navHeight);
    if (nav.classList.contains('fixed-nav')) {
      const distanceFromTop = wantedSection.offsetTop - navHeight;
      window.scrollTo({ left: 0, top: distanceFromTop });
      console.log(11111111111);
      //for smaller screen
      if (navHeight > 82) {
        console.log(222222222222);
        const linksContainerHeight = linksContainer.getBoundingClientRect()
          .height;
        const distanceFromTop =
          wantedSection.offsetTop + linksContainerHeight - navHeight;
        window.scrollTo({ left: 0, top: distanceFromTop });
      }
    } else {
      const distanceFromTop = wantedSection.offsetTop - navHeight - navHeight;
      window.scrollTo({ left: 0, top: distanceFromTop });
      console.log(333333333);
      if (navHeight > 82) {
        console.log(444444444);
        const linksContainerHeight = linksContainer.getBoundingClientRect()
          .height;
        const distanceFromTop =
          wantedSection.offsetTop +
          linksContainerHeight -
          navHeight -
          navHeight;
        window.scrollTo({ left: 0, top: distanceFromTop });
      }
    }
    //b3d kda h5le el sf7a t3ml scroll ll mkan bta3 el section bta3y
  });
});
