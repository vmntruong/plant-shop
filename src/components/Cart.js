import { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { FaTrashAlt } from "react-icons/fa"

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce((acc, cartItem) => acc + cartItem.amount * cartItem.price, 0)

	useEffect( () => {
		document.title = `LMJ : ${total}€ d'achats`
	}, [cart])

	function handleUpdate(e, itemId) {
		let newCart = []
		for (let i=0; i<cart.length; i++) {
			const item = cart[i]
			if (item.id == itemId) {
				let newItem = item
				newItem.amount = e.target.value
				newCart.push(newItem)
			}
			else {
				newCart.push(item)
			}
		}
		updateCart(newCart)
	}

	function removeItem(itemId) {
		const newCart = cart.filter( item => item.id !== itemId )
		updateCart(newCart)
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
            { cart.map( ({id, name, price, amount}) => 
				<div key={id} className='lmj-cart-item'>
					{name} {price}€ x 
					<input 
						type='number' 
						value={amount}
						min={0}
						className='lmj-spin-amount'
						onChange={(e) => handleUpdate(e, id)}
					/>
					<FaTrashAlt onClick={() => removeItem(id)} className='trash-icon' />
				</div>)
			}
			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart