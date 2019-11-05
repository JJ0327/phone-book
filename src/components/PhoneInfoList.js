import React from 'react';
import PropTypes from 'prop-types';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({
  data = [],
  onRemove = () => console.warn('onRemove not defined'),
}) => {
  const list = data.map((info) => (
    <PhoneInfo
      key={info.id}
      id={info.id}
      phone={info.phone}
      name={info.name}
      onRemove={onRemove}
    />
  ));
  return <div>{list}</div>;
};

PhoneInfoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PhoneInfoList;
