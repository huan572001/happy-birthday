import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Gach, B1, Img1, KB } from '../../img';
const Game = () => {
  const [map, setMap] = useState([
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 3],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  ]);
  const [user, setUser] = useState([8, 0]);
  const win = [5, 11];
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 39) {
        setMap(() => {
          let tmp = [...map];
          if (tmp[user[0]][user[1] + 1] !== 1 && tmp[0].length > user[1] + 1) {
            tmp[user[0]][user[1] + 1] = 2;
            tmp[user[0]][user[1]] = 0;
            setUser([user[0], user[1] + 1]);
          }
          return tmp;
        });
      } else if (event.keyCode === 37) {
        setMap(() => {
          let tmp = [...map];
          if (tmp[user[0]][user[1] - 1] !== 1 && user[1] - 1 >= 0) {
            tmp[user[0]][user[1] - 1] = 2;
            tmp[user[0]][user[1]] = 0;
            setUser([user[0], user[1] - 1]);
          }
          return tmp;
        });
      } else if (event.keyCode === 38) {
        setMap(() => {
          let tmp = [...map];
          if (user[0] - 1 >= 0) {
            if (tmp[user[0] - 1][user[1]] !== 1) {
              tmp[user[0] - 1][user[1]] = 2;
              tmp[user[0]][user[1]] = 0;
              setUser([user[0] - 1, user[1]]);
            }
          }
          return tmp;
        });
      } else if (event.keyCode === 40) {
        setMap(() => {
          let tmp = [...map];
          if (tmp.length > user[0] + 1) {
            if (tmp[user[0] + 1][user[1]] !== 1) {
              tmp[user[0] + 1][user[1]] = 2;
              tmp[user[0]][user[1]] = 0;
              setUser([user[0] + 1, user[1]]);
            }
          }
          return tmp;
        });
      }
    };
    if (win[0] === user[0] && win[1] === user[1]) {
      console.log('ưin roi ne');
    }
    window.addEventListener('keydown', handleEscKey); // thêm event listener
    return () => {
      window.removeEventListener('keydown', handleEscKey); // remove event listener khi component unmount
    };
  });
  return (
    <div>
      {map.map((child, index) => {
        return (
          <Row key={index}>
            {child.map((a, index1) => {
              return (
                <Col key={index1} span={2}>
                  <img
                    style={{ width: '100%', height: '45px' }}
                    src={a === 0 ? Gach : a === 2 ? Img1 : a === 3 ? KB : B1}
                    alt="map"
                  />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
};
export default Game;
