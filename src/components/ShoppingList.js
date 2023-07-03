import { useState } from "react"
import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import PlantItem from './PlantItem'
import PlantItemModal from "./PlantItemModal"

function ShoppingList({cart, updateCart}) {
    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [plantSelected, setPlantSelected] = useState(null)
    const [popUp, setPopUp] =useState(false)

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

    function handleItemClick(plant) {
        setPopUp(true)
        setPlantSelected(plant)
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
                        .map((plant) => (
                            ( categoriesSelected.length === 0 || categoriesSelected.includes(plant.category) )
                            &&
                            <div key={plant.id}>
                                <PlantItem
                                    cover={plant.cover}
                                    name={plant.name}
                                    water={plant.water}
                                    light={plant.light}
                                    price={plant.price}
                                    onClick={() => handleItemClick(plant)}
                                />
                                <button 
                                    className="lmj-add-to-cart-btn"
                                    onClick={() => addToCart(plant.id, plant.name, plant.price)}>Ajouter</button>
                            </div>
                    ))
                }
			</ul>
            {
                popUp && plantSelected &&
                <PlantItemModal
                    plant={plantSelected} 
                    setPopUp={setPopUp} 
                    addToCart={() => addToCart(plantSelected.id, plantSelected.name, plantSelected.price)}
                />
            }
		</div>
    )
}

export default ShoppingList