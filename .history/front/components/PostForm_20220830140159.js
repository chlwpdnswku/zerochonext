import React, { useCallback, useState, useEffect } from 'react';

import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

function PostForm() {
  // poss 파일에있는 부분 추가
  const { imagePaths, postAdded } = useSelector((state) => state.post);

  const onSubmit = useCallback(() => {}, []);

  const onChangeText = useCallback(() => {}, []);

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
        {/* 이미지 미리보기 부분  */}
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} />
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
