import React from 'react';
import './scss/app.scss';
import Header from './component/Header';
import Categories from './component/Categories';
import Sort from './component/Sort';
import PizzaBlock from './component/PizzaBlock';
import { pizzas } from './assets/Array';
console.log(pizzas);

function App() {
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
            {pizzas.map((obj) => (
            <PizzaBlock {...obj}
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
