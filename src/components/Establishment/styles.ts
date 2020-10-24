import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  position: absolute;
  top: 40px;
  z-index: 1;
  flex: 1;
  width: 80%;
  align-self: center;
`;

export const EstablishmentContainer = styled.View`
  background-color: black;
  padding-top: 20px;
  border-radius: 20px;
`;

export const ScrollView = styled.ScrollView`
  height: 600px;
`;

export const ButtonContainer = styled.View`
  align-self: flex-end;
`;

export const Photo = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text`
  color: #F56D50;
  font-size: 17px;
  margin-top: 10px;
`;

export const Separator = styled.View`
  margin: 0 8px;
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