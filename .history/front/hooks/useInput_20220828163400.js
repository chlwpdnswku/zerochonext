import React from 'react';

export default (initalValue = null) => {
  const [value, setValue] = useState();
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
};
