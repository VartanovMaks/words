import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import GameRules from './components/Rules/GameRules'
import TaskCreate from './components/baseComponents/TaskCreate'
import SelectGame from './components/Game/SelectGame'
import Header from './components/Header/Header';
import GameContextProvider from './components/ContextComponent'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import TaskList from './components/baseComponents/TaskList';

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
                <Route path='/create-task'>
                  <TaskCreate />
                  <TaskList/>
                </Route>
                <Route>
                  <Redirect to='/select-game' />
                </Route>
              </Switch>
            </div>
          </Router>
        </main>
      </GameContextProvider>
   
  );
}

export default App;
