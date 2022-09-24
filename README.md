# e-shop

Выполнены основные требования:
+ Поиск не чувствителен к регистру
+ Если ни один из товаров не подошел под условие поиска, пользователю показывается соответствующую надпись
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

Надо бы сделать:
кнопку Оформить заказ в Корзине
придумать, как по другому удалять товар из корзины, так как есть - моргает вся страница при перезагрузке, видимо, сделано не эффективно
