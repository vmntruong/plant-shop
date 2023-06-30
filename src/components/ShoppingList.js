import { useState } from "react"
import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import PlantItem from './PlantItem'

function ShoppingList({cart, updateCart}) {
    const [categoriesSelected, setCategoriesSelected] = useState([])
    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    function addToCart(id, name, price) {
        const currentPlantAdded = cart.find(cartItem => cartItem.id === id)
        if (currentPlantAdded) {
            const cartFilterdCurrentPlant = cart.filter(
                cartItem => cartItem.id !== id
            )
            updateCart([
                ...cartFilterdCurrentPlant, 
                {id, name, price, amount: currentPlantAdded.amount + 1}
            ])
        }
        else {
            updateCart([...cart, {id, name, price, amount : 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
			<Categories 
                categories={categories} 
                categoriesSelected={categoriesSelected}
                setCategoriesSelected={setCategoriesSelected}
            />
			<ul className='lmj-plant-list'>
				{
                    plantList
                        .map(({id, name, cover, water, light, price, category}) => (
                            ( categoriesSelected.length === 0 || categoriesSelected.includes(category) )
                            &&
                            <div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                <button 
                                    className="lmj-add-to-cart-btn"
                                    onClick={() => addToCart(id, name, price)}>Ajouter</button>
                            </div>
                    ))
                }
			</ul>
		</div>
    )
}

export default ShoppingList