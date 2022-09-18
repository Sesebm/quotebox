import { useEffect, useState } from 'react'
import data from './data/data.json'
import numberRandom from './util/randomNumber'
import './App.css'
import Quotebox from './components/Quotebox'

function App() {
  const [quote, setQuote] = useState()
  useEffect(() => {
  setQuote(numberRandom())
  }, [])
  console.log(quote)
  return (
    <div className="App">
     <Quotebox data={data} quote={quote} setQuote={setQuote}/>

    </div>
  )
}

export default App
