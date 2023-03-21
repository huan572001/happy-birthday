import { Button } from 'antd';
import React, { useState } from 'react';
import TypewriterExample from '../../Typing';

const LTT = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [open, setopen] = useState(true);
  const [maseger, setMaseger] = useState(
    'Đã được một thời gian rồi t có tình cảm với một người con gái. Ban đầu t cũng không biết t có tình cảm với cô ấy không. T rất ít khi nhắn tin cho một người khác nhưng không biết vì sao mỗi khi t cầm điện thoại muốn trò chuyện với ai đó t lại nghĩ đến cô ấy đầu tiên. Thế là t đã biết được t thực sự thích cô ấy. Nhưng vì cả hai đang là bạn t sợ sẽ mất đi mối quan hệ này. Có nhưng thời điểm t muốn nhắn tin trò chuyện với cô ấy nhưng sợ cô ấy biết mình thích cô ấy nên t đã nghĩ ra một cách hơi củ chuối đó là mỗi lần t đi xe khách t đều nt cho cô ấy và lấy lý do là ngồi trê xe rảnh quá nên mới nt cho cô ấy để cô ấy ko biết t thích cô ấy hhh lý do hơi củ chuối ha. Nhưng đến gần đây tình cảm của t với cô ấy ngày càng lớn hơn nên t đã cố gắng nt với cô ấy nhiều hơn nhưng chắc cô ấy thấy phiền lắm. T không biết cô ấy có chút tình cảm nào với mình không. Nhưng tình cảm cảu t với cô ấy cứ giữ trong lòng làm cho t cảm thấy khó chịu vô cùng nên t quyết định sữ tỏ tình với cô ấy. T biết nếu t tỏ tình sẽ có thể mất đi tình bạn giữa hai người nhưng nếu t không nói sẽ không bao giờ có thế trở thành một phần cuộc sống của cô ấy được.  Hà biết cô ấy trong câu truyện này là ai không đó là Hà đó. Hà làm người yêu t nhé.'
  );
  const tinNhan = (values) => {
    if (values === 'DY') {
      setMaseger(
        'T hạnh phúc quá <3. Hà có rảnh ngày nào trong tuần không hãy nhắn cho t biét nhé <3'
      );
    } else if (values === 'TC') {
      setMaseger(
        'T biết những hình ảnh của quá khứ là rào cản rất lớn đối với hai ta. T nhớ cách đây nửa năm t có comment vào bài đăng cảu Hà là "ai mà xinh quá cho t làm quen nha" lúc đó Hà có nhắn (t ko nhớ chính xác lắm) là "vậy xóa hết ký ức quen lại từ đầu nha" liệu bây giờ Hà có thể cho t cơ hội làm quen Hà lại từ đầu được không. Dù Hà có đồng ý hay không thì hãy trả lời cho t biết nhé :(('
      );
    }
    setopen(false);
  };

  return (
    <div>
      <TypewriterExample
        data={maseger}
        setIsTypingComplete={setIsTypingComplete}
      />
      {isTypingComplete && open ? (
        <>
          <Button onClick={() => tinNhan('DY')}>Đồng ý</Button>
          <Button onClick={() => tinNhan('TC')}>Từ chối</Button>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default LTT;
