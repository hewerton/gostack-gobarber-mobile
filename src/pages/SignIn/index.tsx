import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styles';

const SignIn: React.FC = () => (
  <S.Container>
    <Image source={logo} />
    <S.Title>Faça seu logon</S.Title>

    <Input name="email" icon="mail" placeholder="E-mail" />
    <Input name="password" icon="lock" placeholder="Senha" />
    <Button>Entrar</Button>
  </S.Container>
);

export default SignIn;
