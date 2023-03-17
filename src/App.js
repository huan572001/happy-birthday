import { Card, Col, Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { Img1, Img2, Img3, Img4, Img5, Img6, LV } from './img';
function App() {
  const [open, setopen] = useState(false);
  return (
    <div className="app">
      <div className="mascot" style={open ? { display: 'none' } : {}}>
        <img src={LV} alt="lv" />
        <div onClick={() => setopen(true)} className="closeMascots">
          X
        </div>
      </div>

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
          <Card className="card-screen">hello</Card>
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
