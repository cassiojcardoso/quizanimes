import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
  background-color: #333333;
  border-style:none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 15px;
  width: 100%;
  font-size: 14px;
  color: white;
  outline-style:0;
  margin-bottom:25px;
`;
function Input({ onChange, placeholder, ...props }) {
  return (
    <div>

      <InputBase
        placeholder={placeholder}
        onChange={onChange}
         // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}
Input.defaultProps = {
  value: '',
};
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
export default Input;
