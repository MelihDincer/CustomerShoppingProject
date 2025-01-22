import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Product from "./components/Product"

function App() {
const [card, setCard] = useState([]);

const emptyCard = () => {
  setCard([]);
}
  return (
    <div className="container mx-auto">
      <Header card={card} />
      <Product card={card} setCard={setCard}/>
      <Card card={card} emptyCard={emptyCard}/>
    </div>
  )
}

export default App
