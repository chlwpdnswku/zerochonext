import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

function NicknameEditForm() {
  const style = useMemo(() => {
    marginBotton: '20px';
    border: '1px';
  }, []);

  return (
    <Form>
      <Input.Search addonBefore='닉네임' enterButton='수정' />
    </Form>
  );
}

export default NicknameEditForm;
