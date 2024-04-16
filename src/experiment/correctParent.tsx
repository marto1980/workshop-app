
'use client'

import { useState } from 'react';

const ChildComponent = () => {
  console.log('I re-rendered');

  return <p>Child</p>;
}

const ParentComponent = ({children}:{children: JSX.Element}) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </div>
  );
};

const CorrectParent = () => (
    <ParentComponent>
        <ChildComponent />
    </ParentComponent>
)

export { CorrectParent }