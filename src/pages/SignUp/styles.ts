import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px 0 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 40px 0 16px;
`;

export const BackToLoginButton = styled.TouchableOpacity`
  background-color: #312e38;

  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 16px 0;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const BackToLoginText = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
