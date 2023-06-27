import { useEffect, useState } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)

    const total = cart.reduce((acc, cartItem) => acc + cartItem.amount * cartItem.price, 0)

	useEffect( () => {
		document.title = `LMJ : ${total}€ d'achats`
	}, [cart])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
            {cart.map( cartItem => <div key={cartItem.id}>{cartItem.name} {cartItem.price}€ x {cartItem.amount}</div>)}
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