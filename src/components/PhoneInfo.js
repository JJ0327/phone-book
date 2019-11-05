import React from 'react';
import PropTypes from 'prop-types';
import './PhoneInfo.css';

const PhoneInfo = ({
  name = '이름',
  phone = '010-0000-0000',
  id = 0,
  onRemove,
}) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <div>
        <b>{name}</b>
      </div>
      <div>{phone}</div>
      <button type="button" onClick={handleRemove}>
        삭제
      </button>
    </div>
  );
};

PhoneInfo.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PhoneInfo;
