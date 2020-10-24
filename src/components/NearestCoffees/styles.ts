import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 50px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  flex: 1;
  width: 370px;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
  background-color: black;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  margin-right: 20px;
`;

export const NearestCoffeesContainer = styled.View`
  background-color: black;
  width: 190px;
  margin-top: 5px;
  border-radius: 5px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #F56D50;
  font-weight: bold;
`;