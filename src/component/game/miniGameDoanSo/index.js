import { Button, Form, Input, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import TypewriterExample from '../../Typing';

const DoanSO = ({ setWin }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [noti, setNoti] = useState({
    noti: 'Trong thử thách này chương trình sẽ random ra một số ngẫu nhiên từ 1-100 nhiệm vụ cả bạn là tìm ra được con số này bạn có 6 lần đoán mỗi lần đoán chương trình sẽ cho biết số bạn đoán lớn hơn hay bé hơn số cần tim',
    count: 6,
    QKold: [1, 100],
  });
  const [reset, setReset] = useState(false);
  const KQ = useRef(Math.floor(Math.random() * 100 + 1));
  const [btnWin, setBtnWin] = useState(false);
  console.log(KQ);
  const onFinish = (values) => {
    if (noti.count === 1 && Number(values.num) !== KQ.current) {
      setNoti({
        noti: 'Bạn đã thua cuộc! Hãy ấn reset để thử lại nha <3',
        count: noti.count,
        QKold: noti.QKold - 1,
      });

      setReset(true);
    } else if (values.num > KQ.current) {
      setNoti({
        noti:
          'Con số của bạn lớn hơn đáp án! Đáp án nằm trong khoảng: ' +
          noti.QKold[0] +
          '-' +
          values.num,
        count: noti.count - 1,
        QKold: [noti.QKold[0], values.num],
      });
    } else if (values.num < KQ.current) {
      setNoti({
        noti:
          'Số ' +
          values.num +
          ' nhỏ hơn đáp án! đáp an nằm trong khoảng: ' +
          values.num +
          '-' +
          noti.QKold[1],
        count: noti.count - 1,
        QKold: [values.num, noti.QKold[1]],
      });
    } else {
      setNoti({
        noti: 'Xin chúc mừng Hà đã trả lời chính xác',
        count: noti.count - 1,
        QKold: [KQ, KQ],
      });
      setIsTypingComplete(false);
      setBtnWin(true);
    }
  };
  const onReset = () => {
    KQ.current = Math.floor(Math.random() * 101);

    setNoti({
      noti: 'Tip: bạn hãy chọn những con số chính giữa để thử VD:1-100 hãy chọn số 50',
      count: 6,
      QKold: [1, 100],
    });
    setReset(false);
  };
  return (
    <div style={{ fontSize: 20 }}>
      <TypewriterExample
        data={noti.noti}
        setIsTypingComplete={setIsTypingComplete}
      />
      <Button
        style={btnWin ? {} : { display: 'none' }}
        onClick={() => setWin()}
      >
        OK
      </Button>
      <div style={isTypingComplete ? {} : { display: 'none' }}>
        <div>Sô lượt còn lại của bạn:{noti.count} </div>

        <Form onFinish={onFinish}>
          <Form.Item
            label="Hãy nhập con số bạn muốn đoán vào đây"
            name={'num'}
            rules={[
              {
                required: true,
                message: 'Không được để trống!',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button style={!reset ? {} : { display: 'none' }} htmlType="submit">
              Kiểm tra
            </Button>
            <Button
              style={reset ? {} : { display: 'none' }}
              htmlType="button"
              onClick={onReset}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DoanSO;
