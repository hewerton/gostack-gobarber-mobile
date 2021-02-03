import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import * as S from './styles';
interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const {
    registerField,
    defaultValue = '',
    fieldName,
    error,
    clearError,
  } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsBlurred(!!inputValueRef.current.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, inputValueRef]);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputElementRef.current.focus();
    },
  }));

  return (
    <S.Container isFocused={isFocused} isErrored={!!error}>
      <S.Icon
        name={icon}
        size={20}
        isFocused={isFocused}
        isFilled={isBlurred}
        isErrored={!!error}
      />
      <S.TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        onChangeText={value => {
          inputValueRef.current.value = value;
          clearError();
        }}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </S.Container>
  );
};

export default forwardRef(Input);
