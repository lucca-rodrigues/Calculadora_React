import React, {useState} from 'react';
import {Jumbotron, Container, Row, Col, Form, Button} from 'react-bootstrap';
import CalcService from './CalcService';

function App() {
  const [Calculate, ConcatNumber, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalcService();
  const [textNumbers, setTextNumbers] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operation, setOperation] = useState(null);

  function addNumber(number){
    let result;

    if(operation === null){
      result = ConcatNumber(number1, number);
      setNumber1(result);
    }else{
      result = ConcatNumber(number2, number);
      setNumber2(result);
    }
    setTextNumbers(result)
  }

  function defineOperation(op){
    if(operation === null){
      setOperation(op);
      return;
    }
    if(number2 !== null){
      const result = Calculate(parseFloat(number1), parseFloat(number2), operation);
      setOperation(op);
      setNumber1(result.toString())
      setNumber2(null);
      setTextNumbers(result.toString());
    }
  }

  function CalculateNumbers(){
    if (number2 === null){
      return;
    }
    const result = Calculate(parseFloat(number1), parseFloat(number2), operation);
    setTextNumbers(result);
  }

  function Clear(){
    setTextNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }
  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={Clear}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="textNumbers"
              className="text-right"
              value={textNumbers}
              readOnly="readoly"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={()=> addNumber('7')}>7</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('8')}>8</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('9')}>9</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=> defineOperation('/')}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={()=> addNumber('6')}>6</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('5')}>5</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('4')}>4</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=> defineOperation('*')}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={()=> addNumber('3')}>3</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('2')}>2</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('1')}>1</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=> defineOperation('-')}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={()=> addNumber('0')}>0</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=> addNumber('.')}>.</Button>
          </Col>
          <Col>
            <Button variant="success" onClick={CalculateNumbers}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=> defineOperation('+')}>+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}

export default App;
