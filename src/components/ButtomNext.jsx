import React from 'react'
import numberRandom from '../util/randomNumber'
const ButtomNext = ({setQuote}) => {
  
    const handleNumberRandom = () => {
        setQuote (numberRandom())
    }
    return (
    <button onClick={handleNumberRandom} type="button" className="btn btn-light btn-rounded">Next Quote</button>
  )
}

export default ButtomNext