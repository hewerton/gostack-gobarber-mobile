import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

import * as S from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <S.Container {...rest}>
    <S.ButtonText>{children}</S.ButtonText>
  </S.Container>
);

export default Button;
