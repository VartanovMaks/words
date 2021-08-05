import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import GameContextProvider from './components/ContextComponent'

function App() {
  
  return (
    <div>
      <GameContextProvider>
          <Header/>
          <Body/>
          <Footer/>
      </GameContextProvider>
    </div>
  );
}

export default App;
