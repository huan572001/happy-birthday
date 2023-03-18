import React, { useState } from 'react';
import TypewriterExample from '../Typing';
import { Button, Card, Col, Row } from 'antd';
import { LV } from '../../img';

const Mascot = ({ maseger }) => {
  const [open, setopen] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  return (
    <div>
      <Row className="mascot" style={open ? { display: 'none' } : {}}>
        <Col span={9}>
          <img className="figure" src={LV} alt="lv" />
        </Col>
        <Col span={14}>
          <Card className="maseger">
            <TypewriterExample
              data={'Chào mừng bạn đến mini game'}
              setIsTypingComplete={setIsTypingComplete}
            />
          </Card>
          <div className="close">
            <Button
              style={isTypingComplete ? {} : { display: 'none' }}
              onClick={() => setopen(true)}
            >
              Bắt đầu
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Mascot;
