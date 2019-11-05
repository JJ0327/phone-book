import React, { useState } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

const App = () => {
  // eslint-disable-next-line prefer-const
  const [information, setInformation] = useState([
    {
      id: 0,
      name: '김민준',
      phone: '010-0000-0000',
    },
    {
      id: 1,
      name: '홍길동',
      phone: '010-0000-0001',
    },
  ]);

  const handleCreate = (data) => {
    const userData = information;
    setInformation(userData.concat(information.length, ...data));
    console.log(information);
  };

  const handleRemove = (id) => {
    const userData = information;
    setInformation(userData.filter((info) => info.id !== id));
  };
  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList data={information} onRemove={handleRemove} />
    </div>
  );
};

export default App;
