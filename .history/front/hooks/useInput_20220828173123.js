import React, { useState, useCallback } from 'react';

// value는 id , setValue은 onchangeid
export default (initalValue = null) => {
  const [value, setValue] = useState(initalValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // useState와 useCallback을 같이써서 두개다 리턴해주는 식으로함
  return [value, handler];
};
