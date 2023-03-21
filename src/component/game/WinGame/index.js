import { Button } from 'antd';
import React, { useState } from 'react';
import TypewriterExample from '../../Typing';
import LTT from './LTT';

const Winner = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [tiep, setTiep] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <>
      {open ? (
        <div>
          <TypewriterExample
            data={
              'Chúc mừng Hà đã hoàn thành trò chơi t gửi tặng m một bài hát nha <3'
            }
            setIsTypingComplete={setIsTypingComplete}
          />
          {isTypingComplete ? (
            <>
              Tên bài hát là :
              <a
                href={
                  'https://drive.google.com/file/d/1fLkbA50GqQnn6ToLZk0Do2mwqLhIW9ZE/view?usp=sharing'
                }
                target="blank"
              >
                Đôi lời tình ca
              </a>{' '}
              <TypewriterExample
                data={'Tiếp sau đây t có đôi lời muốn nói với Hà'}
                setIsTypingComplete={setTiep}
              />
            </>
          ) : (
            ''
          )}
          {tiep ? <Button onClick={() => setOpen(false)}>Tiếp Tục</Button> : ''}
        </div>
      ) : (
        <LTT />
      )}
    </>
  );
};

export default Winner;
