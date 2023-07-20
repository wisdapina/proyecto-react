import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar/NavBar'

function App() {
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Rick And Morty'}/>
    </div>
  )
}

export default App
