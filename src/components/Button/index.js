import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
${(props) => (
    props.disabled ? css` 
    background-color: '#6F6F6F';
    ` : css` 
    background-color: ${({ theme }) => theme.colors.primary};
    
`)}
  //background-color: ${((props) => (props.disabled ? '#6F6F6F' : ({ theme }) => theme.colors.primary))};
 &:hover{
    background-color:${((props) => (props.disabled ? '#6F6F6F' : '#b23c17'))};
    cursor: ${((props) => (props.disabled ? 'not-allowed' : 'pointer'))};
  }

  padding: 15px;
  width: 100%;
  border-style: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 30px;
  color: white;
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
