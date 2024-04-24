'use client'
import React from 'react';
import { memo, useState } from 'react';

const ChildComponentWithMemo = memo(() => {
  console.log('I re-rendered');

  return <p>Child</p>;
})

const ChildComponent = () => {
  console.log('I re-rendered');

  return <p>Child</p>;
}

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ChildComponent />
    </div>
  );
};

export { ParentComponent }