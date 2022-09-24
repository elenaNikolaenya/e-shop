//по сути все то же самое, что и в каталоге
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

//сделаем кнопку Удалить
//добавим listener на блок со строками таблицы
itemContainer.addEventListener('click', (event) => {
  if (event.target.id === "delete-button") {
    //узнаем индекс элемента, который нужно удалить из массива
    const deletedItem = event.target.closest('.item-cart');  
    const deletedIndex = Number(deletedItem.querySelector('.number').textContent) - 1;
    //удалим товар из массива
    itemsInCart.splice(deletedIndex, 1);
    //удалим массив из локалстоража
    localStorage.removeItem('cart');
    //и заменим его на обновленный
    localStorage.setItem('cart', JSON.stringify(itemsInCart));
    //перезапустим страницу, отрисуется таблица без удаленного товара
    location.reload();
  }
  
  
  

})

/*
deleteButton.addEventListener('click', (event) => {
  const deletedItem = event.target.closest('.item-cart');
  console.log(deletedItem);
  const deletedIndex = deletedItem.querySelector('.number').taxtContent - 1;
  console.log(deletedIndex);

})*/


