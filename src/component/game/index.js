import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Gach, B1, Img1, KB, CH } from '../../img';
const Game = ({ setMeseger, setCheckGame, win, setWin }) => {
  const [map, setMap] = useState([
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 5, 0, 0, 0, 1],
    [1, 0, 4, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 3],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  ]);
  const [user, setUser] = useState([8, 0]);
  const [cauHoi, setCH] = useState([0, 0]);
  console.log(cauHoi, user);
  useEffect(() => {
    if (win) {
      setMap(() => {
        let tmp = [...map];
        tmp[cauHoi[0]][cauHoi[1]] = 0;
        setWin(false);
        return tmp;
      });
    }
    const handleEscKey = (event) => {
      if (event.keyCode === 39) {
        setMap(() => {
          let tmp = [...map];
          setCH([user[0], user[1] + 1]);
          if (!check(tmp[user[0]][user[1] + 1])) {
            if (
              tmp[user[0]][user[1] + 1] !== 1 &&
              tmp[0].length > user[1] + 1
            ) {
              tmp[user[0]][user[1] + 1] = 2;
              tmp[user[0]][user[1]] = 0;
              setUser([user[0], user[1] + 1]);
            }
          }

          return tmp;
        });
      } else if (event.keyCode === 37) {
        setMap(() => {
          let tmp = [...map];
          setCH([user[0], user[1] - 1]);
          if (!check(tmp[user[0]][user[1] - 1])) {
            if (tmp[user[0]][user[1] - 1] !== 1 && user[1] - 1 >= 0) {
              tmp[user[0]][user[1] - 1] = 2;
              tmp[user[0]][user[1]] = 0;
              setUser([user[0], user[1] - 1]);
            }
          }
          return tmp;
        });
      } else if (event.keyCode === 38) {
        setMap(() => {
          let tmp = [...map];
          setCH([user[0] - 1, user[1]]);
          if (!check(tmp[user[0] - 1][user[1]])) {
            if (user[0] - 1 >= 0) {
              if (tmp[user[0] - 1][user[1]] !== 1) {
                tmp[user[0] - 1][user[1]] = 2;
                tmp[user[0]][user[1]] = 0;
                setUser([user[0] - 1, user[1]]);
              }
            }
          }
          return tmp;
        });
      } else if (event.keyCode === 40) {
        setMap(() => {
          let tmp = [...map];
          setCH([user[0] + 1, user[1]]);
          if (!check(tmp[user[0] + 1][user[1]])) {
            if (tmp.length > user[0] + 1) {
              if (tmp[user[0] + 1][user[1]] !== 1) {
                tmp[user[0] + 1][user[1]] = 2;
                tmp[user[0]][user[1]] = 0;
                setUser([user[0] + 1, user[1]]);
              }
            }
          }
          return tmp;
        });
      }
    };

    window.addEventListener('keydown', handleEscKey); // thêm event listener
    return () => {
      window.removeEventListener('keydown', handleEscKey); // remove event listener khi component unmount
    };
  });
  const check = (values) => {
    if (values === 3) {
      setMap(() => {
        let tmp = [...map];

        tmp[user[0]][user[1]] = 0;

        return tmp;
      });
      setMeseger();
      return true;
    } else if (values > 3) {
      setCheckGame(values);
      return true;
    }
    return false;
  };
  const prinIMG = (values) => {
    if (values === 0) {
      return Gach;
    } else if (values === 2) {
      return Img1;
    } else if (values === 3) {
      return KB;
    } else if (values > 3) {
      return CH;
    } else {
      return B1;
    }
  };
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
                    src={prinIMG(a)}
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
