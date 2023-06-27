function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

    function handleClick() {
        const x = scaleValue === 1 ? 'peu' : (scaleValue === 2 ? 'modérement' : 'beaucoup')
        const y = careType === 'light' ? 'de lumière' : "d'arrosage"
        const msg = `Cette plante requiert ${x} ${y}`
        alert(msg)
    }
}

export default CareScale