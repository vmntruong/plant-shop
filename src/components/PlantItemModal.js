import '../styles/PlantItemModal.css'
import PlantItem from './PlantItem'

function PlantItemModal({ plant, setPopUp, addToCart }) {

    return (
        <div className='modal'>
            <div className="plant-item-modal">
                {/* x close window */}
                <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
                <PlantItem
                    cover={plant.cover}
                    name={plant.name}
                    water={plant.water}
                    light={plant.light}
                    price={plant.price}
                    onClick={() => window.open(plant.cover, "_blank")}
                />
                {/* button controls */}
                <div className="pu-button-container">
                    <button onClick={addToCart}> Ajouter au panier </button>
                </div>
            </div>
        </div>
    )
}

export default PlantItemModal