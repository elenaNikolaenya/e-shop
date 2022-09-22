sessionStorage.getItem('cart');
console.log(window.itemsInCart);
const itemTemplate = document.querySelector('#item-cart-template');
const itemContainer = document.querySelector('#table-body');


function makeRowByTemplate(item) {
  const {title, price, img, size} = item;
  const itemRow = itemTemplate.content.cloneNode(true);

  itemRow.querySelector('img').src = img;
  itemRow.querySelector('h2').textContent = title;  
  itemRow.querySelector('.size-cart').textContent = size;  
  itemRow.querySelector('.price-cart').textContent = price;  

  return itemRow;
}

function renderRows(arr) {  
  arr.forEach((obj) => { 
    itemContainer.append(makeRowByTemplate(obj));
  });  
}

renderRows(window.itemsInCart);
/*
//поиск
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const sortSelect = document.querySelector('#sort');

function applySearch() {
  const inputString = searchInput.value.trim().toLowerCase();
  
  currentState = items.filter(function(el) {
    return el.title.toLowerCase().includes(inputString)      
  });    
  sortSelect.selectedIndex = 1;
  renderCards(currentState.sort((a, b) => a.price - b.price));  
}

searchInput.addEventListener('search', applySearch);
searchButton.addEventListener('click', applySearch);

//сортировка
function sortByAlphabet(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
}

sortSelect.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case 'alphabet': {
      currentState.sort((a, b) => sortByAlphabet(a.title, b.title));
      break;
    }
    case 'price-min': {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case 'price-max': {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case 'brand': {
      currentState.sort((a, b) => sortByAlphabet(a.brand, b.brand));
      break;
    }
  }
  renderCards(currentState);
})

//теперь та часть, в которой я усложняю себе жизнь))
// цель - сделать так, чтобы можно было выбрать один размер на карточке кликом по квадратику с размером
// выбранный элемент меняет цвет. Одновременно может быть выбран только 1 размер
// при клике на кнопку Купить выбранная карточка с выбранным размером помещается в корзину (немного модифицируется внешне)

// массив, куда будем складывать купленные предметы (потом из него будет рендериться корзина)
var itemsInCart = [];

// так как одновременно может быть выбран только 1 размер, со всех остальных элементов выделение придется убирать
// значит пригодятся все эл-ты с размером на странице
const allSizes = document.querySelectorAll('.size');

// повесим listener на контейнер с карточками
cardContainer.addEventListener('click', (event) => {
  //получаем всю карточку, на которой произошел клик
  const selectedItem = event.target.closest('.item');
  //если клик был на квадратике с размером
  if (event.target.classList.contains('size')) {
    //то сначала удалим ранее выбранный размер (если был) со всех карточек
    for (let el of allSizes) {
      el.classList.remove('size-selected');
    };
    //и добавим выделение на кликнутый элемент (при повторном клике снимется)
    event.target.classList.toggle('size-selected');
    // если клик был на кнопке Купить
  } else if (event.target.id === "buy-button") {
    //создадим объект для свойств купленного предмета
    let itemInCart = {};
        
    //чтобы узнать, какой размер выбран, проверим все элементы size нашей карточки
    const sizesSelectedItem = selectedItem.querySelectorAll('.size');
  
    for (let size of sizesSelectedItem) {
      //если выбран один из размеров, заполняем объект данными
      if (size.classList.contains('size-selected')) {        
        itemInCart['title'] = selectedItem.querySelector('h2').textContent;
        itemInCart['price'] = parseFloat(selectedItem.querySelector('.price').textContent);
        itemInCart['img'] = selectedItem.querySelector('img').src;
        itemInCart['size'] = size.textContent;
        //добавим купленный предмет (объект) в корзину (массив)
        itemsInCart.push(itemInCart);        
      }
    }

    //если ни один размер не выбран, предлагаем его выбрать
    if (!itemInCart['size']) {
      alert("Выберите размер обуви");
    }        
  }
})
 */

