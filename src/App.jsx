import './App.css'
import Header from './components/Header/Header'
import Principal from './components/Principal/Principal'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

function App() {
 
  const producto = {
    "nombre": "Pc Gamer",
    "descripcion": "Pc Gamer con 16gb de ram, 1tb de almacenamiento y 500gb de ssd",
    "precio": 657.999,
    "SKU": "PCGAMER-01",
    "cantidad": 10    
  }
  return (
    <>
      <Header/>
      <main className='MainPreview'>
      <Principal/>
      <Aside producto={producto}/>
      </main>
      <Footer/>
     
    </>
  )
}

export default App
