import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function PostCardContent({ postData }) {
  //정규표현식 대활호 표현식 : 해시테그 공백제거임 원래 대활호의 목적은
  //^\s 공백제거
  // 공백이없는 경우 #를붙혀서 해시테그들 분리

  //게시글안에서 해시태그를 추출해주는 컴포넌트
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        // 해시테그 모양인 애들은
        if (v.match(/(#[^\s#]+)/)) {
          return (
            // slice(1) :헤시테그 # 떼주기 키값은 index를 집어넣는데 사실 현재 같은 수정할때 변화하는 데이터는 리렌더링해도 됨 postData는 바뀔일이 없는 데이터라도 생각
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a>{v}</a>
            </Link>
          );
        }
        // 일반적인글은 그냥리턴
        return v;
      })}
      #해시태그#최제운##제운!!
    </div>
  );
}
PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
