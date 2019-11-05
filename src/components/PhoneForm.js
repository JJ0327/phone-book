import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PhoneForm = ({ onCreate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, phone };
    onCreate(data);
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="이름"
        value={name}
        onChange={handleChange}
        name="name"
      />
      <input
        placeholder="전화번호"
        value={phone}
        onChange={handleChange}
        name="phone"
      />
      <button type="submit">등록</button>
    </form>
  );
};
PhoneForm.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default PhoneForm;
