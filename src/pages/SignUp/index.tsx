import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErros';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as S from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const res = await api.post('/users', data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        console.log(err.errors);

        Alert.alert(
          'Erro ao realizar o cadastro',
          'Ocorreu um erro ao realizar o cadastro, verifique as informações fornecidas e tente novamente.',
        );
      } else {
        Alert.alert('Erro ao realizar o cadastro', err.response.data.message);
        console.log(err.response.data);
      }
    }
  }, []);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
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
              <S.Title>Crie sua conta</S.Title>
            </View>

            <Form
              style={{ width: '100%' }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input
                name="name"
                icon="user"
                placeholder="Nome"
                autoCapitalize="words"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              <Input
                ref={emailRef}
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                ref={passwordRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                secureTextEntry
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </S.Container>
          <S.BackToLoginButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#F4EDE8" />
            <S.BackToLoginText>Voltar para o login</S.BackToLoginText>
          </S.BackToLoginButton>
        </KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
