import React from 'react';
import './scss/app.scss';
import Header from './component/Header';
import Categories from './component/Categories';
import Sort from './component/Sort';
import PizzaBlock from './component/PizzaBlock';
// import { pizzas } from './assets/Array';
import { jsxDEV } from 'react/jsx-dev-runtime';
// console.log(pizzas);

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
     fetch('https://665a0cf9de346625136ee5a1.mockapi.io/item')
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((arr) => {
    setItems(arr);
  }); 
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />

            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
            <PizzaBlock key={obj.id} {...obj}
            // title={obj.title}
            // price={obj.price}
            // img={obj.img} 
            // sizes={obj.sizes}
            // types={obj.types} 
            />))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
