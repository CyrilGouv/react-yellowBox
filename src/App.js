import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Modal from './components/Modal'

import './App.css'


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <Modal />
    </div>
  );
}

export default App;
