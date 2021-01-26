import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface InputProps {
  isFocused: boolean;
  isFilled?: boolean;
}

export const Container = styled.View<InputProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;

  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  border: 1px;
  border-color: ${props => (props.isFocused ? '#ff9000' : '#232129')};
`;

export const Icon = styled(FeatherIcon)<InputProps>`
  margin-right: 16px;
  color: ${props =>
    props.isFocused || props.isFilled ? '#ff9000' : '#666360'};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;
