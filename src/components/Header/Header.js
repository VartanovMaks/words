
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

function Header() {

    return (
      <header>
        <h3 className="text-center my-3"> Игра 5 слов</h3>
        <Container className="mb-3">
            <Row className="d-flex justify-content-around">
                <Col md="auto" sm="auto">
                    <Link to='/select-game'>
                        <Button variant="primary" className="mx-2 my-2">Выбрать игру</Button>
                    </Link>
                    <Link to='/play'>
                        <Button variant="warning" className="mx-2 my-2">Игра</Button>
                    </Link>
                    <Link to='/rules'>
                        <Button variant="info" className="mx-2 my-2">Правила игры</Button>
                    </Link>
                    <Link to='/base'>
                        <Button variant="success" className="mx-2 my-2">База данных</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
      </header>
    );
  }
  
export default Header;