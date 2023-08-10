import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Categories, LoadingBlock, PizzaBlock, SortPopUp } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const sortNames = [
  { name: "популярности", type: 'rating', order: 'desc' }, 
  { name: "цене", type: 'price', order: 'desc' }, 
  { name: "алфавиту", type: 'name', order: 'asc' }
  ]

function Home() {

  const dispatch = useDispatch();

  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({cart}) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({filters}) => filters)

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortPopUp = React.useCallback(type => {
    dispatch(setSortBy(type))
  }, [])

  const handleAddPizza = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div>
        <div className="container">
          <div className="content__top">
              <Categories 
              activeCategory={category}
              onClickItem={onSelectCategory}
              items={categoryNames}/>
              <SortPopUp 
              onChangeSortType={onSelectSortPopUp}
              activeSortType={sortBy.type}
              items={sortNames}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? items.map((obj) => (
                  <PizzaBlock onClickAddPizza={handleAddPizza} 
                  key={obj.id} 
                  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                  {...obj} />
                )) 
                : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)}
                
            
            </div></div>
        </div>
  )
}

export default Home