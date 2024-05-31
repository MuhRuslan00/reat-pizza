# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

React Pizza v2 (REMASTERED)
https://peaceful-dove-11d.notion.site/React-Pizza-v2-REMASTERED-655fa3a5ea4f4bce8faeee2f28a8fb22 

Примерное разъяснение кодов, но не в деталях.

Categories js.
по клику меняем активность категорий.
1. const [active, setActive] = React.useState(0);
2. Создать массив: const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
3. <li className={active === i ? 'active' : ''}>Все</li>
4.  для клика в начале создать переменную до return:
      const onClickCategory = (i) => {
       setActive(i)};
5. для каждой  <li создать onClick с аноним функцией, кот вызывает нашу ф-ю onClickCategory:
    <li
          key={i}
           onClick={() => onClickCategory(i)} className={active === i ? 'active' : ''} >{value}</li>
        ))}    
6. {value} - значения в заданном массиве
7.  { categories.map((value, i) => (..... - нужна чтобы перебрать все эл массива
***********************************
Рендеринг основной страницы:
1. Создать массив данных. Array.js
2. Импорт массива в App.js
3. рендер через {pizzas.map((obj) => (
            <PizzaBlock key={obj.id} {...obj}
            или так 
            title={obj.title}
            price={obj.price}
            img={obj.img} 
            sizes={obj.sizes}
            types={obj.types} 
            />))} -->
4. const PizzaBlock = ({ title, price, img, types, sizes, category, rating}) => {
    <h4 className="pizza-block__title">{title}</h4> -вставляем в виде  статичных пропсов
5. PizzaBlock.js  Рендер sizes: [26, 30, 40]:
   {
            sizes.map((size) => (
            <li
            key={size}
6.а Рендер types: [0, 1],Тонкое, традиционное
  
  PizzaBlock: создать массив: const typeNames = ['тонкое', 'традиционное'];
  PizzaBlock:  const PizzaBlock = ({ title, price, img, types, sizes, category, rating})
  App.js:  рендер через {pizzas.map((obj) => (
            <PizzaBlock key={obj.id} {...obj}
            или так 
            types={obj.types} 
            />))} -->
  <ul>
        {
        types.map((typeId) => (
        <li
        key={typeId}
         onClick={() => setActiveTipe(typeId)} className={activeTipe ===typeId ? 'active' : ''}>{typeNames[typeId]} 
          </li>
 6.б Для переключения по клику, если по этому клику вызывется только одна функция, то можно так сокращать:
        const [activeTipe, setActiveTipe] = React.useState(0);
        onClick={() => setActiveTipe(typeId)} className={activeTipe ===typeId ? 'active' : ''}

*****************************************
Sort.js
Поп-ап, появление, исчезание, выбор из списка.
 - 1-3 Создаем стейт для open, setOpen
2. условный рендеринг className="sort__popup"
3. по клику на span видимость и исчез popup

Sort.js - a-b созд массив
2. создаем popUpSelect, setPopUpSelect
3. создаем map
*************************************************
mockapi.io -готовый сервис предоставляет возм хранить данные а предпроекте
есть бесплатный тариф
sign up
1. создать проект (+)
2. new resource name (items) --> create --> items == ссылка на твой массив, а на странице пустой [] - необходимо перенести данные массива из локалки в МОКАПИ
3. копируем массив в локалке--> переход в Мокапи в DATA--> втавить в [] скопироа массив
4. вызов данных с сервера для отображения в 3000 --- запрос на бекенд
    function App() {
  fetch('https://665a0cf9de346625136ee5a1.mockapi.io/item')
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((json) => { ---> переконверция и возвращение массива
    console.log(json)
  });

  4a- const [items, setItems] = React.useState([]); - пустая коробка
 ----   {pizzas.map((obj) => (-----меняем на----{.items((obj) => (
  4б - .then((arr) => { ---> переконверция и возвращение массива
    setItems(arr);
  });--- при таком коде идет бесконечный запрос, соответственно код помещаем в 
    React.useEffect(() => {
     fetch('https://665a0cf9de346625136ee5a1.mockapi.io/item').....
 
  }, []) --- вставляем пустой массив, он будет рендерится один раз
  **убираем импорт**import { pizzas } from './assets/Array';

  







  



