import Banner from './Banner.js'
import Cart from './Cart';
import Footer from './Footer.js';
import ShoppingList from './ShoppingList.js';
import '../styles/Layout.css'
import { useEffect, useState } from 'react';

function App() {

	const savedCart = localStorage.getItem("cart")
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
			<Banner />
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
