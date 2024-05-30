import imgPizza1 from './img/pizza/image 2 (2).png';
import imgPizza2 from './img/pizza/image 5.png';
import imgPizza3 from './img/pizza/image 6.png';
import imgPizza4 from './img/pizza/image 7.png';


const pizzas = [
  {
    id: 0,
    img: imgPizza1,
    title: "Пепперони Фреш с перцем",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 1,
    rating: 4 
  },

  {
    id: 1,
    img: imgPizza2,
    title: "Сырная",
    types: [0],
    sizes: [26, 30, 40],
    price: 506,
    category: 2,
    rating: 6
  },

  {
    id: 2,
    img: imgPizza3,
    title: "Цыпленок барбекю",
    types: [0, 1],
    sizes: [26, 30],
    price: 366,
    category: 4,
    rating: 4 
  },

  {
    id: 3,
    img: imgPizza4,
    title: "Кисло-сладкий цыпленок",
    types: [0, 1],
    sizes: [30, 40],
    price: 488,
    category: 3,
    rating: 2 
  },

  {
    id: 4,
    img: imgPizza1,
    title: "Чизбургер-пицца",
    types: [0, 1],
    sizes: [26, 40],
    price: 663,
    category: 5,
    rating: 8
  },

  {
    id: 5,
    img: imgPizza3,
    title: "Крэйзи пепперони",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 501,
    category: 5,
    rating: 2
  },

  {
    id: 6,
    img: imgPizza1,
    title: "Пепперони",
    types: [1],
    sizes: [26, 30, 40],
    price: 339,
    category: 1,
    rating: 9
  },

  {
    id: 7,
    img: imgPizza2,
    title: "Маргарита",
    types: [0, 1],
    sizes: [26, 40],
    price: 753,
    category: 3,
    rating: 10
  },

  {
    id: 8,
    img: imgPizza3,
    title: "Четыре сезона",
    types: [1],
    sizes: [26, 30, 40],
    price: 752,
    category: 2,
    rating: 3
  },

  {
    id: 9,
    img: imgPizza4,
    title: "Овощи и грибы 🌱",
    types: [0],
    sizes: [26, 30],
    price: 369,
    category: 0,
    rating: 7
  }
  
]
export { pizzas };
