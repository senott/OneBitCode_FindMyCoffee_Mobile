import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  position: absolute;
  top: 40px;
  z-index: 1;
  width: 80%;
  align-self: center;
`;

export const EstablishmentContainer = styled.View`
  background-color: black;
  padding: 20px 30px;
  border-radius: 20px;
  flex: 1;
`;

export const ScrollView = styled.ScrollView`
  height: 600px;
  flex: 1;
`;

export const ButtonContainer = styled.View`
  align-self: flex-end;
`;

export const Photo = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;

export const Title = styled.Text`
  color: #F56D50;
  font-size: 17px;
  margin-top: 10px;
`;

export const Separator = styled.View`
  margin: 10px 0;
  border-bottom-color: white;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const BoldText = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;

export const ScheduleText = styled.Text`
  color: white;
`;

export const Footer = styled.View`
  flex-direction: row;
  padding-left: 20px;
  background-color: #393939;
  padding: 10px;
  margin-top: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const FooterText = styled.Text`
  color: white;
  margin-left: 10px;
  font-size: 11px;
`;