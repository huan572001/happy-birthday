import React, { useState } from 'react';
import TypewriterExample from '../Typing';
import { Button, Card, Col, Row } from 'antd';
import { LV } from '../../img';

const Mascot = ({ open, setopen, maseger, chirdren }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [openW, setWOpen] = useState(true);
  return (
    <div>
      <Row className="mascot" style={open ? { display: 'none' } : {}}>
        <Col span={9}>
          <img className="figure" src={LV} alt="lv" />
        </Col>
        <Col span={14}>
          <Card className="maseger">
            {openW ? (
              <TypewriterExample
                data={maseger}
                setIsTypingComplete={setIsTypingComplete}
              />
            ) : (
              ''
            )}
            {chirdren}
          </Card>
          <div className="close">
            <Button
              style={isTypingComplete ? {} : { display: 'none' }}
              onClick={() => {
                setopen(true);
                setIsTypingComplete(false);
                setWOpen(false);
              }}
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
