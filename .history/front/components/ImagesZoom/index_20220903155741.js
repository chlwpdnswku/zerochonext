import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';

const Ovarlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  height: 44px;
  backgrond: white;
  posotion: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
  & button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
  }
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;
// 전체 css를 넣어준다는 느낌으로 아래에 아무대나 넣어줘도 됨! 이거는 나중에 따로 공부하기
const Global = createGlobalStyle`
  .slick-slide {
    display: inline-block;
  }
  .ant-card-cover {
    transform: none !important;
  }
`;

function ImagesZoom({ images, onClose }) {
  const [currentSlide, setCurrentSlice] = useState(0);
  return (
    <Ovarlay>
      <Global />
      <div>
        <Header>
          <h1>상세이미지</h1>
          <button onClick={onClose}>X</button>
        </Header>
        {/* 케루셀 react-slick  옆으로 넘기면서 볼 수 있는 지원 컴포넌트 */}
        <SlickWrapper>
          <div>
            {/* 0번째부터  현재 슬라이드를  page를 넘기는 슬라이드번호를 state로저장 */}
            <Slick
              initialSlide={0}
              afterChange={(slide) => setCurrentSlice(slide)}
              infinite
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {/* 이미지들을 반복문으로 넣음 src는 url들을 반복시키는 거임  alt는 대체 정보 */}
              {images.map((v) => (
                <ImgWrapper>
                  <img src={v.src} alt={v.src} />
                </ImgWrapper>
              ))}
            </Slick>
            <Indicator>
              {/* div를 적어줘야 숫자가뜸 */}
              <div>
                {currentSlide + 1} / {images.length}
              </div>
            </Indicator>
          </div>
        </SlickWrapper>
      </div>
    </Ovarlay>
  );
}

export default ImagesZoom;
