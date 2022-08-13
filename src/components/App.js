import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from "./icons.js";
import './App.css';

const itemArray = new Array(9).fill("empty");
const cardColor = new Array(9).fill("warning");

function App() {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [turnColor, setTurnColor] = useState("text-danger");

  const reloadGame = () => {
    itemArray.fill("empty");
    cardColor.fill("warning");
    setTurnColor("text-danger");
    setIsCross(false);
    setWinMessage("");
  }

  const checkWin = () => {
      if(itemArray[0] === itemArray[1] && 
         itemArray[0] === itemArray[2] &&
         itemArray[0] !== "empty"){
          setWinMessage(`${itemArray[0]} Won!`);
          cardColor[0] = cardColor[1] = cardColor[2] = "success";
      } else if(itemArray[3] === itemArray[4] && 
                itemArray[3] === itemArray[5] &&
                itemArray[3] !== "empty") {
          setWinMessage(`${itemArray[3]} Won!`);
          cardColor[3] = cardColor[4] = cardColor[5] = "success";
      } else if(itemArray[6] === itemArray[7] && 
                itemArray[6] === itemArray[8] &&
                itemArray[6] !== "empty") {
          setWinMessage(`${itemArray[6]} Won!`);
          cardColor[6] = cardColor[7] = cardColor[8] = "success";
      } else if(itemArray[0] === itemArray[3] && 
                itemArray[0] === itemArray[6] &&
                itemArray[0] !== "empty") {
          setWinMessage(`${itemArray[0]} Won!`);
          cardColor[0] = cardColor[3] = cardColor[6] = "success";
      } else if(itemArray[1] === itemArray[4] && 
                itemArray[1] === itemArray[7] &&
                itemArray[1] !== "empty") {
          setWinMessage(`${itemArray[1]} Won!`);
          cardColor[1] = cardColor[4] = cardColor[7] = "success";
      } else if(itemArray[2] === itemArray[5] && 
                itemArray[2] === itemArray[8] &&
                itemArray[2] !== "empty") {
          setWinMessage(`${itemArray[2]} Won!`);
          cardColor[2] = cardColor[5] = cardColor[8] = "success";
      } else if(itemArray[0] === itemArray[4] && 
                itemArray[0] === itemArray[8] &&
                itemArray[0] !== "empty") {
          setWinMessage(`${itemArray[0]} Won!`);
          cardColor[0] = cardColor[4] = cardColor[8] = "success";
      } else if(itemArray[2] === itemArray[4] && 
                itemArray[2] === itemArray[6] &&
                itemArray[2] !== "empty") {
          setWinMessage(`${itemArray[2]} Won!`);
          cardColor[2] = cardColor[4] = cardColor[6] = "success";
      }
  };

  const changeItem = itemNumber => {
    
    if(winMessage){
      return toast(winMessage, {type : "success"});
    }

    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "Cross" : "Circle";
      cardColor[itemNumber] = isCross ? "primary" : "danger";
      isCross ? setTurnColor("text-danger") : setTurnColor("text-primary");
      setIsCross(!isCross);
    } else {
      return toast("Already Filled!", {type : "error"});
    }
     
    checkWin();
  };
  
  return (
    <div>
    <header>
      <h1>Tic Tac Toe</h1>
    </header>
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload The Game
              </Button>
            </div>
          ) : (
            itemArray.indexOf("empty") === -1 ? (
              <div className="mb-2 mt-2">
                <h1 className="text-secondary text-center">
                  Game Draw
                </h1>
                <Button color="secondary" block onClick={reloadGame}>
                  Reload The Game
                </Button>
              </div>
            ) : (
              <h1 className={turnColor}>
                {isCross ? "Cross " : "Circle "} Turn
              </h1>
            )
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color={cardColor[index]} onClick={() => {changeItem(index)}}>
                <CardBody className="box">
                  <div class="flip-card-front">
                    <Icon name={item} /> 
                  </div>
                  <div class="flip-card-back">
                    <Icon name={item} /> 
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
