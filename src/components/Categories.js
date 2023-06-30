import { useState } from 'react';
import '../styles/Categories.css'
import Select from 'react-select'

function Categories({categories, categoriesSelected, setCategoriesSelected}) {

    const options = categories.map( cat => {
        return {
            label: cat,
            value: cat
        }
    })
    const [selectedOptions, setSelectedOptions] = useState([])
    
    function resetCategories() {
        setSelectedOptions([])
        setCategoriesSelected([])
    }

    // function updateCategories(e) {
    //     const clickedValue = e.target.value
    //     let newCats = []
    //     if (categoriesSelected.includes(clickedValue)) {
    //         newCats = categoriesSelected.filter( cat => cat !== clickedValue)
    //     }
    //     else {
    //         newCats = [...categoriesSelected, clickedValue]
    //     }
    //     setCategoriesSelected(newCats)
    // }

    function handleChange(values) {
        setSelectedOptions(values)
        setCategoriesSelected(values.map( v => v.value ))
    }

    return (
        <div className='lmj-categories'>
            {/* <select multiple
                value={categoriesSelected}
                onChange={e => updateCategories(e)}
                className="lmj-categories-select"
            >
                <option value=''>---</option>
                {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                ))}
            </select> */}

            <Select 
                isMulti
                options={options}
                value={selectedOptions}
                onChange={values => handleChange(values)}
                placeholder="Select categories..."
            />

            {/* <button onClick={resetCategories}>Réinitialiser</button> */}
        </div>
    )
}

export default Categories