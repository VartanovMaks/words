import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import GameRules from './components/GameRules'
import SelectGame from './components/SelectGame'
import Header from './components/Header';
import GameContextProvider from './components/ContextComponent'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
  
      <GameContextProvider>
        <main>
          <Router>
            <div>
            <Header/>
              <Switch>
                <Route path='/select-game'>
                  <SelectGame />
                </Route>
                <Route path='/play'>
                  <Body />
                  <Footer />
                </Route>
                <Route path='/rules'>
                  <GameRules />
                </Route>
              </Switch>
            </div>
          </Router>
        </main>
      </GameContextProvider>
   
  );
}

export default App;
