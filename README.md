# e-shop
Basic requirements are covered:
+ Search is not case-sensitive
+ If none of the products meet the search criteria, the corresponding message is shown to the user.
+ Search is triggered by pressing "Enter" while focused on a text input field
+ orting is applied to search results (if the user was looking for something), and not to all available products
+ Search resets applied sorting (including resetting the selected option in HTML)

By default, sorting by price in ascending order is selected

Additional functionality implemented:
+ when you click on a size:
    - it lights up
    - you can select only 1 size at a time on the entire page
+ when you click on the Buy button:
    - the selected product of the required size will be placed in the cart
    - the highlight with the size will disappear
    - the card will blink
    - the counter in the header next to the link to the cart will be increased
+ when you click on the Delete button in the Cart tab:
    - the item will be removed from the cart
    - the counter in the header in the Catalog tab will be decreased

Todo:
- The Order button in the Cart

Выполнены основные требования:
+ Поиск не чувствителен к регистру
+ Если ни один из товаров не подошел под условие поиска, пользователю показывается соответствующая надпись
+ Поиск срабатывает при нажатии на Enter в текстовом поле
+ Сортировка применяется к результатам поиска (если пользователь что-то искал), а не ко всем возможным товарам
+ Поиск сбрасывает примененную сортировку (в том числе сбрасывает выбранную опцию в HTML)

по умолчанию выбрана сортировка по цене по возрастанию

Реализован дополнительный функционал:
+ при нажатии на размер:
    - он подсвечивается
    - одновременно может быть выбран только 1 размер на всей странице
+ при нажатии на кнопку Купить:
    - выбранный товар выбранного размера поместится в корзину
    - пропадет подсветка с размера
    - карточка 'моргнет'
    - в шапке возле ссылки на корзину увеличится счетчик
+ при нажатии на кнопку Удалить во вкладке Корзина:
    - товар удалится из корзины
    - счетчик в шапке в Каталоге уменьшится

Сделать:
- кнопку Оформить заказ в Корзине