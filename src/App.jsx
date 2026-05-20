import './App.css'
import Header from './components/Header/Header'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import properties from './data/properties'
import PropertyList from './components/PropertyList/PropertyList'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <main>
        <Title></Title>
        <PropertyList properties={properties}></PropertyList>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
