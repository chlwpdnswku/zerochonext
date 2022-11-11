import React from 'react';
import Link from 'next/link';
function PostCardContent({ postData }) {
  //정규표현식 대활호 표현식 : 해시테그 공백제거임 원래 대활호의 목적은
  //^\s 공백제거
  // 공백이없는 경우 #를붙혀서 해시테그들 분리

  //게시글안에서 해시태그를 추출해주는 컴포넌트를 만들기
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v) => {
        // 해시테그 모양인 애들은
        if (postData.text(/#[^\s#]+)/)) {
          return (
            // slice(1) :헤시테그 # 떼주기
            <Link href={`/hashtag/${v.slice(1)}`}>
              <a>{v}</a>
            </Link>
          );
        }
        // 일반적인글은 그냥리턴
        return v;
      })}
    </div>
  );
}

export default PostCardContent;
