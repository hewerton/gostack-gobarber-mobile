import React from 'react';
import {Image} from 'react-native';

import * as S from './styles';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <S.Container>
    <Image source={logo} />
    <S.Title>Faça seu logon</S.Title>
  </S.Container>
);

export default SignIn;
