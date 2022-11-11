import React, { useCallback, useState, useEffect, useRef } from 'react';

import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducer/post';

function PostForm() {
  // DOM에 접근하려고할떄 useRef를 써준다
  const imageInput = useRef();
  const dispatch = useDispatch();
  // poss 파일에있는 부분 추가
  const { imagePaths, postAdded } = useSelector((state) => state.post);

  //   action=객체임
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const [text, setText] = useState('');
  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='어떤 신기한 일이 있었나요?'
      />
      <div>
        <input type='file' multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type='primary' style={{ float: 'right' }} htmlType='submit'>
          ㅇㅇ
        </Button>
      </div>
      <div>
        {/* 이미지 미리보기 부분  이미지를업로드했을때 반복 돌려서 저장을 함 나중에취소할때 제거를함*/}
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
}

export default PostForm;
