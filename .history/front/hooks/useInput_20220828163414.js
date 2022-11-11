import React, { useState, useCallback } from 'react';

export default (initalValue = null) => {
  const [value, setValue] = useState(initalValue);
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
};
