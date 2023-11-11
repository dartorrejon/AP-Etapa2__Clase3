import './App.css'
import Header from './components/Header/Header'
import pcGamer from '../public/pcGamer.webp'

function App() {
 
  const producto = {
    "nombre": "Pc Gamer",
    "descripción": "Pc Gamer con 16gb de ram, 1tb de almacenamiento y 500gb de ssd",
    "Precio": 100000,
    "SKU": "PCGAMER-01",
    "cantidad": 10    
  }
  return (
    <>
      <Header />
      <img src={pcGamer} alt="" srcset="" />
    </>
  )
}

export default App
