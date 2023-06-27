import { useState } from "react"
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState("Entrez votre adresse email ici")

    function handleChange({ target }) {
        setInputValue(target.value)
    }

    function handleBlur({ target }) {
        if (!target.value.includes("@")) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide. 😥")
        }
    }

    return (
        <div className="lmj-footer">
            <div className="lmj-footer-elem">Pour les passionné·e·s de plantes 🌿🌱🌵</div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <input type="text" 
                placeholder={inputValue} 
                onChange={(e) => handleChange(e)} 
                onBlur={handleBlur}
                className="lmj-footer-elem"
            />
        </div>
    )
}


export default Footer