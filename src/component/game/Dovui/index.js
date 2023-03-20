import { Button, Card, Col, Row } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import TypewriterExample from '../../Typing';
import { Cauhoi } from './cauhoi';
const DoVui = ({ setWin }) => {
  const cauhoi = useRef(Cauhoi[Math.floor(Math.random() * Cauhoi.length)]);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [maseger, setMaseger] = useState(
    'Chào mừng bạn đến với chương trình ai thông minh hơn học sinh lớp 5 :v '
  );
  const [open, setOpen] = useState(false);
  const [openReset, setOpenReset] = useState();
  useEffect(() => {
    if (isTypingComplete) {
      setMaseger('hãy trả lời câu hỏi sau để có thể đi tiếp nhé ');
      setOpen(true);
    }
  }, [isTypingComplete]);
  const KTKQ = (values) => {
    if (values === cauhoi.current.DapAnDung) {
      setMaseger('Xin chuc mwng ban da rar loi chinh xac');
      setOpenReset('ok');
    } else {
      setMaseger('Bạn đã trả lời sai rồi hãy thử lại nhé');
      setOpenReset('reset');
    }
    setOpen(false);
  };
  const reset = () => {
    cauhoi.current = Cauhoi[Math.floor(Math.random() * Cauhoi.length)];
    setOpen(true);
    setOpenReset('');
  };
  return (
    <div>
      <TypewriterExample
        data={maseger}
        setIsTypingComplete={setIsTypingComplete}
      />
      {openReset === 'reset' ? <Button onClick={reset}>Thử lại</Button> : ''}
      {openReset === 'ok' ? <Button onClick={() => setWin()}>OK</Button> : ''}
      <div style={open ? {} : { display: 'none' }}>
        <Card>{cauhoi.current.Cauhoi}</Card>
        <Row>
          <Col span={12}>
            <Button
              style={{ width: '100%', marginTop: 2 }}
              onClick={() => KTKQ(cauhoi.current.DapAn.A)}
            >
              {cauhoi.current.DapAn.A}
            </Button>
          </Col>
          <Col span={12}>
            <Button
              style={{ width: '100%', marginTop: 2 }}
              onClick={() => KTKQ(cauhoi.current.DapAn.B)}
            >
              {cauhoi.current.DapAn.B}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button
              style={{ width: '100%', marginTop: 2 }}
              onClick={() => KTKQ(cauhoi.current.DapAn.C)}
            >
              {cauhoi.current.DapAn.C}
            </Button>
          </Col>
          <Col span={12}>
            <Button
              style={{ width: '100%', marginTop: 2 }}
              onClick={() => KTKQ(cauhoi.current.DapAn.D)}
            >
              {cauhoi.current.DapAn.D}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DoVui;
