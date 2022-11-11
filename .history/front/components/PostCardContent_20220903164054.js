import React from 'react';

function PostCardContent({ postData }) {
  //정규표현식 대활호 표현식 : 해시테그 공백제거임 원래 대활호의 목적은
  //^\s 공백제거
  // 공백이없는 경우 #를붙혀서 해시테그들 분리
  return <div>{postData.split(/#[^\s#]+/g)}</div>;
}

export default PostCardContent;
