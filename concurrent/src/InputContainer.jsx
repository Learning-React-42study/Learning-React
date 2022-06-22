import React, { useState, useTransition } from 'react';

const DummyString = ({ string }) => {
  return string
    .split('')
    .map((c) => <p key={Math.random()}>{c.repeat(99999)}</p>);
};

function InputContainer() {
  const [value, setValue] = useState('');
  const [concurrent, setConcurrent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ width: '300px', height: '100px' }}>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          startTransition(() => {
            setSearchQuery(e.target.value);
          });
        }}
      />
      <div>
        <label style={{ fontSize: '15px', color: 'pink' }}>
          concurrent feature
          <input
            type='checkbox'
            onChange={(e) => setConcurrent(e.target.checked)}
          />
        </label>
      </div>
      <p>{concurrent ? '[concurrent feature]' : '[normal]'}</p>
      {isPending && <p style={{ color: 'blue' }}>rendering...</p>}
      <DummyString string={concurrent ? searchQuery : value} />
      <div />
    </div>
  );
}

export default InputContainer;
