import React, { useState, useCallback } from 'react';

export default (initalValue = null) => {
  const [value, setValue] = useState(initalValue);
  const handler = useCallback((e) => {
    setId(e.target.value);
  }, []);

  // useState와 useCallback을 같이써서 두개다 리턴해주는 식으로함
  return [value, handler];
};
