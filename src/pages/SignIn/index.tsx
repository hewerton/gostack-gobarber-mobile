import React from 'react';
import { View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styles';

const SignIn: React.FC = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <S.Container>
          <Image source={logo} />
          <View>
            <S.Title>Faça seu logon</S.Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button onPress={() => console.log()}>Entrar</Button>

          <S.ForgotPasswordButton>
            <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
          </S.ForgotPasswordButton>
        </S.Container>
        <S.CreateAccountButton>
          <Icon name="log-in" size={20} color="#ff9000" />
          <S.CreateAccountText>Criar uma conta</S.CreateAccountText>
        </S.CreateAccountButton>
      </KeyboardAvoidingView>
    </ScrollView>
  </SafeAreaView>
);

export default SignIn;
