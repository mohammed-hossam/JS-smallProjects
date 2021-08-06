// ****** SELECT ITEMS **********
const groceryList = document.querySelector('.grocery-list');
const groceryForm = document.querySelector('.grocery-form');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-btn');
const submitBtn = document.querySelector('.submit-btn');
const alert = document.querySelector('.alert');
const input = document.querySelector('#grocery');

// edit option(like a general state to edit)
let editFlag = false;
let wantedElementToEdit;
let editId;

// ****** EVENT LISTENERS **********
// Submit btn event
groceryForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValue = input.value;
  console.log(inputValue);

  if (inputValue && !editFlag) {
    //create the element
    const article = document.createElement('article');
    article.classList.add('grocery-item');
    //to add id for every input
    //article.setAttribute('data-id', new Date().getTime().toString());
    //anothersolution
    const dataAttribute = document.createAttribute('data-id');
    dataAttribute.value = new Date().getTime().toString();
    article.setAttributeNode(dataAttribute);
    // appendChild
    groceryList.appendChild(article);
    // show the element by adding class to the container
    groceryContainer.classList.add('show-container');
    //render data
    article.innerHTML = `<p class="item">${input.value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    //alert note
    displayAlert('item is added', 'success');

    //add to localstorage
    addToLocalstorage(dataAttribute.value, input.value);

    //setback to default
    setBackToDefault();

    //btns functionality
    const deleteBtn = article.querySelector('.delete-btn');
    const editBtn = article.querySelector('.edit-btn');
    // delete btn
    deleteBtn.addEventListener('click', (e) => {
      const parentElement = e.currentTarget.parentElement.parentElement;
      console.log(parentElement);
      parentElement.remove();
      groceryList.children.length === 0 &&
        groceryContainer.classList.remove('show-container');

      displayAlert('Item is deleted', 'danger');

      //remove from local storage
      const id = parentElement.getAttribute('data-id');
      console.log(id);
      //another solutin
      //  const id = parentElement.dataset.id;
      removeFromLocalstorage(id);

      //setback to default
      setBackToDefault();
    });
    // edit btn
    editBtn.addEventListener('click', (e) => {
      const parentElement = e.currentTarget.parentElement.parentElement;
      wantedElementToEdit = parentElement.firstElementChild;
      const wantedValueToEdit = wantedElementToEdit.textContent;
      console.log(wantedValueToEdit);
      editId = parentElement.dataset.id;
      console.log(editId);
      editFlag = true;
      submitBtn.textContent = 'Edit';
      input.value = wantedValueToEdit;
    });
  } else if (inputValue && editFlag) {
    wantedElementToEdit.textContent = input.value;

    displayAlert('Item is edited', 'success');

    editLocalstorage(editId, input.value);

    setBackToDefault();
  } else {
    displayAlert('please add an item', 'danger');
  }
});

// clearBtn event
clearBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.grocery-item');
  items.forEach((item) => {
    groceryList.removeChild(item);
  });
  displayAlert('All items are removed', 'danger');

  groceryContainer.classList.remove('show-container');

  localStorage.removeItem('list');

  setBackToDefault();
});

// onload Event
window.addEventListener('load', () => {
  const list = JSON.parse(localStorage.getItem('list'));

  list.forEach((ele) => {
    const article = document.createElement('article');
    article.classList.add('grocery-item');
    const dataAttribute = document.createAttribute('data-id');
    dataAttribute.value = ele.id;
    article.setAttributeNode(dataAttribute);
    // appendChild
    groceryList.appendChild(article);
    // show the element by adding class to the container
    groceryContainer.classList.add('show-container');
    //render data
    article.innerHTML = `<p class="item">${ele.value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>`;

    //btns functionality
    const deleteBtn = article.querySelector('.delete-btn');
    const editBtn = article.querySelector('.edit-btn');
    // delete btn
    deleteBtn.addEventListener('click', (e) => {
      const parentElement = e.currentTarget.parentElement.parentElement;
      console.log(parentElement);
      parentElement.remove();
      groceryList.children.length === 0 &&
        groceryContainer.classList.remove('show-container');

      displayAlert('Item is deleted', 'danger');

      //remove from local storage
      const id = parentElement.getAttribute('data-id');
      console.log(id);
      //another solutin
      //  const id = parentElement.dataset.id;
      removeFromLocalstorage(id);

      //setback to default
      setBackToDefault();
    });
    // edit btn
    editBtn.addEventListener('click', (e) => {
      const parentElement = e.currentTarget.parentElement.parentElement;
      wantedElementToEdit = parentElement.firstElementChild;
      const wantedValueToEdit = wantedElementToEdit.textContent;
      console.log(wantedValueToEdit);
      editId = parentElement.dataset.id;
      console.log(editId);
      editFlag = true;
      submitBtn.textContent = 'Edit';
      input.value = wantedValueToEdit;
    });
  });
});

// ****** FUNCTIONS **********
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    removeAlert(action);
  }, 2000);
}

function removeAlert(action) {
  alert.textContent = '';
  alert.classList.remove(`alert-${action}`);
}

function setBackToDefault() {
  input.value = '';
  editFlag = false;
  wantedElementToEdit = '';
  editId = '';
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
function addToLocalstorage(id, value) {
  //3ayz 23ml array lw msh 3nde w lw 3nde 2gbha b get w b3d kda 27ot feha el item el zyada b push 3ady w b3d kda 27oto tany fl local b add
  if (localStorage.getItem('list')) {
    const list = JSON.parse(localStorage.getItem('list'));
    list.push({ id, value });
    localStorage.setItem('list', JSON.stringify(list));
  } else {
    const list = [];
    list.push({ id, value });
    //     console.log(newList);
    localStorage.setItem('list', JSON.stringify(list));
  }
  console.log(1111111111);
}
function editLocalstorage(id, value) {
  const list = JSON.parse(localStorage.getItem('list'));
  const editedList = list.map((ele) => {
    if (ele.id === id) {
      ele.value = value;
    }
    return ele;
  });

  localStorage.setItem('list', JSON.stringify(editedList));
}

function removeFromLocalstorage(id) {
  const list = JSON.parse(localStorage.getItem('list'));
  const filteredList = list.filter((ele) => {
    return ele.id !== id;
  });
  localStorage.setItem('list', JSON.stringify(filteredList));
}
