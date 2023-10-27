items = [
  {
    title: "Массивные бордовые дерби с массивной подошвой",
    brand: "Marsel shoes",  
    price: 269,
    img: "./img/1.jpg",
    sizes: [36, 37, 38, 40],    
  },
  {
    title: "Бежевые демисезонные ботинки с рельефной подошвой",
    brand: "Marsel shoes",  
    price: 289,
    img: "./img/2.jpg",
    sizes: [36, 37, 38, 39],    
  },
  {
    title: "Демисезонные челси с металлическим декором на пятке",
    brand: "Marsel shoes",  
    price: 299,
    img: "./img/3.jpg",
    sizes: [37, 38, 39, 40],    
  },
  {
    title: "Высокие черные ботинки с бежевой подошвой",
    brand: "Marsel shoes",  
    price: 285,
    img: "./img/4.jpg",
    sizes: [36, 37, 38, 39, 40],    
  },
  {
    title: "Ботинки c широким кожаным шнурком",
    brand: "Marsel shoes",  
    price: 285,
    img: "./img/5.jpg",
    sizes: [36, 38, 40],    
  },
  {
    title: "Черные кожаные казаки",
    brand: "Marsel shoes",  
    price: 219,
    img: "./img/6.jpg",
    sizes: [37, 38, 39],    
  },
  {
    title: "Бежевые замшевые ботинки с черной массивной подошвой",
    brand: "Marsel shoes",  
    price: 269,
    img: "./img/7.jpg",
    sizes: [38, 39, 40],    
  },
  {
    title: "Кеды летние белые, без подкладки",
    brand: "Vera Victoria Vito",  
    price: 258,
    img: "./img/8.jpg",
    sizes: [38, 39, 40, 41],    
  },
  {
    title: "Ботинки демисезонные на байке",
    brand: "Vera Victoria Vito",  
    price: 670,
    img: "./img/9.jpg",
    sizes: [36, 39, 40],    
  },
  {
    title: "Балетки летние натуральная кожа",
    brand: "Vera Victoria Vito",  
    price: 125,
    img: "./img/10.jpg",
    sizes: [37, 38, 39],    
  },
  {
    title: "Кроссовки ECCO ELO",
    brand: "Ecco",  
    price: 318,
    img: "./img/11.jpg",
    sizes: [36, 39, 40],    
  },
  {
    title: "Полуботинки ECCO MODTRAY",
    brand: "Ecco",  
    price: 302,
    img: "./img/12.jpg",
    sizes: [38],    
  },
  {
    title: "Полуботинки ECCO NOUVELLE",
    brand: "Ecco",  
    price: 445,
    img: "./img/13.jpg",
    sizes: [36, 37, 38, 39, 40],    
  },
  {
    title: "Ботильоны ECCO SHAPE SCULPTED MOTION",
    brand: "Ecco",  
    price: 397,
    img: "./img/14.jpg",
    sizes: [36, 37, 39, 40],    
  },
  {
    title: "Ботинки высокие ECCO MODTRAY",
    brand: "Ecco",  
    price: 604,
    img: "./img/15.jpg",
    sizes: [36, 37, 38, 39, 40, 41],    
  } 
]

//rendering of cards  
let currentState = [...items];
const cardTemplate = document.querySelector('#item-template');
const cardContainer = document.querySelector('#catalog');
const nothingFound = document.querySelector('#nothing-found');

function makeCardByTemplate(item) {
  const {title, brand, price, img, sizes} = item;
  const itemCard = cardTemplate.content.cloneNode(true);

  itemCard.querySelector('h2').textContent = title;
  itemCard.querySelector('p').textContent = brand;
  itemCard.querySelector('.price').textContent = `${price} p.`;
  itemCard.querySelector('img').src = img;

  const sizeContainer = itemCard.querySelector('.sizes');

  sizes.forEach((element) => {
    const size = document.createElement('span');
    size.classList.add('size');
    size.textContent = element;
    sizeContainer.append(size);
  })

  return itemCard;
}

function renderCards(arr) {
  nothingFound.textContent = '';
  cardContainer.innerHTML = '';
  arr.forEach((obj) => { 
    cardContainer.append(makeCardByTemplate(obj));
  });
  if (!arr.length) {
    nothingFound.textContent = 'К сожалению, по вашему запросу ничего не найдено';
  } 
}

renderCards(currentState.sort((a, b) => a.price - b.price));

//search
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

//sorting
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

// an array for items in the cart
let itemsInCart = [];
// in case, when we already have something in the cart
if (localStorage.getItem('cart')) {
  itemsInCart = JSON.parse(localStorage.getItem('cart'));
}
// counter for items in the cart (in the header)
const counter = document.querySelector('.counter');
counter.textContent = ` (${itemsInCart.length})`;
// all elements with size-number on the page
const allSizes = document.querySelectorAll('.size');

//makes the card blink
function highlight (card) {
  card.classList.add('lighted');
  setTimeout(() => {
    card.classList.remove('lighted');
  }, 200);
}

cardContainer.addEventListener('click', (event) => {
  //get the card, that was clicked on
  const selectedItem = event.target.closest('.item');
  //if the click was on an element with size-number...
  if (event.target.classList.contains('size')) {
    //... delete the previous selected size from all cards
    for (let el of allSizes) {
      el.classList.remove('size-selected');
    };
    //...and add lighting to the currently selected size (will be removed by the next click)
    event.target.classList.toggle('size-selected');
    // if the click was on the Buy button
  } else if (event.target.id === "buy-button") {    
    let itemInCart = {};    
        
    //to get the chosen size check all elements with size on the card
    const sizesSelectedItem = selectedItem.querySelectorAll('.size');    
  
    for (let size of sizesSelectedItem) {
      //if one of sizes is selected, fill the object with data
      if (size.classList.contains('size-selected')) {        
        itemInCart['title'] = selectedItem.querySelector('h2').textContent;
        itemInCart['price'] = parseFloat(selectedItem.querySelector('.price').textContent);
        itemInCart['img'] = selectedItem.querySelector('img').src;
        itemInCart['size'] = size.textContent;
        //add this object to the cart (an array)
        itemsInCart.push(itemInCart);
        //add this array to localeStorage, to use it in the cart tab
        localStorage.setItem('cart', JSON.stringify(itemsInCart));        
        highlight(selectedItem);
        size.classList.remove('size-selected');
        counter.textContent = ` (${itemsInCart.length})`;             
      }
    }

    //if no one of sizes is selected, propose to choose it
    if (!itemInCart['size']) {
      alert("Выберите размер обуви");
    }        
  }
})
 

