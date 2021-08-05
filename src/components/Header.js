
import Nav from 'react-bootstrap/Nav';
import {GameContext} from './ContextComponent';
import {useContext} from 'react';

function Header() {

  const {
    resetScore
  } = useContext(GameContext);

    return (
      <div>
        <h3 className="text-center mt-4 mb-4"> Игра 5 слов</h3>
        <Nav variant="pills" defaultActiveKey="/home" className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/home" onClick={resetScore}>Выбрать игру</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Правила игры</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Регистрация</Nav.Link>
            </Nav.Item>
        </Nav>
    
      </div>
    );
  }
  
export default Header;