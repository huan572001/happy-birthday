import { Card, Col, Row } from 'antd';

import React, { useState } from 'react';
import './App.css';
import Game from './component/game';
import Mascot from './component/Mascot';
import { Img1, Img2, Img3, Img4, Img5, Img6 } from './img';
function App() {
  const [maseger, setMaseger] = useState();
  return (
    <div className="app">
      <Mascot />
      <Row>
        <Col className="img-my-Girl" span={4}>
          <div>
            <img src={Img1} alt="my Girl" />
          </div>

          <div className="flex-left">
            <img src={Img2} alt="my Girl" />
          </div>
          <div>
            <img src={Img3} alt="my Girl" />
          </div>
        </Col>
        <Col span={16}>
          <Card className="card-screen">
            <Game />
          </Card>
        </Col>
        <Col className="img-my-Girl" span={4}>
          <div className="flex-left">
            <img src={Img4} alt="my Girl" />
          </div>
          <div>
            <img src={Img5} alt="my Girl" />
          </div>
          <div className="flex-left">
            <img src={Img6} alt="my Girl" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
