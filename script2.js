let itemsInCart = [];
if (localStorage.getItem('cart')) {
  itemsInCart = JSON.parse(localStorage.getItem('cart'));
}
const itemTemplate = document.querySelector('#item-cart-template');
const itemContainer = document.querySelector('#table-body');


function makeRowByTemplate(item, number) {
  const {title, price, img, size} = item;
  const itemRow = itemTemplate.content.cloneNode(true);

  itemRow.querySelector('.number').textContent = number + 1;

  itemRow.querySelector('img').src = img;
  itemRow.querySelector('h2').textContent = title;  
  itemRow.querySelector('.size-cart').textContent = size;  
  itemRow.querySelector('.price-cart').textContent = price;  

  return itemRow;
}

function renderRows(arr) {  
  arr.forEach((obj, ind) => { 
    itemContainer.append(makeRowByTemplate(obj, ind));
  });  
}

renderRows(itemsInCart);

//button Delete
itemContainer.addEventListener('click', (event) => {
  if (event.target.id === "delete-button") {
    const deletedItem = event.target.closest('.item-cart');  
    const deletedIndex = Number(deletedItem.querySelector('.number').textContent) - 1;
    itemsInCart.splice(deletedIndex, 1);
    localStorage.removeItem('cart');    
    localStorage.setItem('cart', JSON.stringify(itemsInCart));    
    itemContainer.innerHTML = '';
    renderRows(itemsInCart);
  }
})