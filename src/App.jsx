import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ItemCount } from './components/ItemCount/ItemCount'
function App() {
  const handleCart =(cantidad)=>{
    console.log("cantidad es de ", cantidad)

   }
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Rick And Morty'}/>
    <ItemCount stock={5} onAdd={handleCart}/>
    </div>
  )
}

export default App
