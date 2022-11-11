import React from 'react';

function useInput() {
  return <div>useInput</div>;
}

export default useInput;
const [id, setId] = useState('');
const onChangeId = useCallback((e) => {
  setId(e.target.value);
}, []);
