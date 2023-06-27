import '../styles/Categories.css'

function Categories({categories, categorieSelected, setCategorieSelected}) {

    function resetCategories() {
        setCategorieSelected('')
    }

    return (
        <div className='lmj-categories'>
            <select
                value={categorieSelected}
                onChange={ e => setCategorieSelected(e.target.value) }
                className="lmj-categories-select"
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={resetCategories}>Réinitialiser</button>
        </div>
    )
}

export default Categories