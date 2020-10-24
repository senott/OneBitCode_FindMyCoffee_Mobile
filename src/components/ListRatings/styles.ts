import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex-direction: column;
`;

export const RatingsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const TextOpinion = styled.Text`
  color: white;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 17px;
  font-weight: bold;
`;

export const Separator = styled.View`
  margin: 8px;
  border-bottom-color: white;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const RatingContainer = styled.View`
  flex-direction: column;
  margin: 0 20px;
`;

export const RatingUserText = styled.Text`
  color: white;
  font-weight: bold;
  margin-right: 30px;
`;

export const RatingText = styled.Text`
  color: white;
  margin: 0 20px;
  font-size: 14px;
`;


