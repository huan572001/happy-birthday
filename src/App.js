import { Card, Col, Row } from 'antd';

import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './component/game';
import DoVui from './component/game/Dovui';
import DoanSO from './component/game/miniGameDoanSo';
import Winner from './component/game/WinGame';
import Mascot from './component/Mascot';
import { Img1, Img2, Img3, Img4, Img5, Img6, BR } from './img';
function App() {
  const [maseger, setMaseger] = useState(
    'Chúc mừng sinh nhật nha Hà <3 <3 qua tuổi mới chúc m ngày càng xinh đẹp hơn nè, luôn luôn mạnh khỏe thành công trong công việc. Chúc mọi điều tốt đẹp nhất sẽ đến với m nha. T cũng không biết tặng m cái gì nên t có viết mini game nho nhỏ. M chơi game vui vẻ nha hoàn thành trò chơi sẽ có một phần quà nho nhỏ của t gửi đến m á. Để chơi game Hà hãy sử dụng những mũi tên lên xuống trái phải nha <3'
  );
  const [open, setOpen] = useState(false);
  const [checkGame, setCheckGame] = useState();
  const [win, setWin] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [checkGame]);
  const game = () => {
    if (checkGame === 4) {
      return (
        <DoanSO
          setWin={() => {
            setOpen(true);
            setWin(true);
          }}
        />
      );
    } else if (checkGame === 5) {
      return (
        <DoVui
          setWin={() => {
            setOpen(true);
            setWin(true);
          }}
        />
      );
    } else if (checkGame === 3) {
      return <Winner />;
    }
  };
  return (
    <div className="app" style={{ fontSize: 20 }}>
      <img className="BR" src={BR} alt="BR" />
      <Mascot
        open={open}
        setopen={setOpen}
        maseger={maseger}
        chirdren={game()}
      />
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
            <Game
              setMeseger={() => {
                setMaseger('Chúc mừng bạn đã chiến thắng');
                setOpen(false);
              }}
              setCheckGame={setCheckGame}
              win={win}
              setWin={setWin}
            />
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
