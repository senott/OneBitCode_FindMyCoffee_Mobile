import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { EstablishmentProps } from "../../services/EstablishmentService";

import ListCoffees from "../ListCoffees";

import {
  Container,
  Button,
  ButtonText,
  NearestCoffeesContainer,
  Title,
} from "./styles";

interface NearestCoffeesprops {
  latitude: number;
  longitude: number;
}

const NearestCoffees: React.FC<NearestCoffeesprops> = ({
  latitude,
  longitude,
}) => {
  const [showDropDownButton, setShowDropDownButton] = useState(false);

  return (
    <Container>
      <Button onPress={() => setShowDropDownButton(!showDropDownButton)}>
        <ButtonText>Find My Coffee</ButtonText>
        <FontAwesome name="heart" color="white" style={{ marginRight: 5 }} />
        <FontAwesome name="angle-down" color="white" />
      </Button>
      {showDropDownButton && (
        <NearestCoffeesContainer>
          <Title>Cafés mais amados na região</Title>
          <ListCoffees latitude={latitude} longitude={longitude} />
        </NearestCoffeesContainer>
      )}
    </Container>
  );
};

export default NearestCoffees;
