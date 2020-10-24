import React, { useCallback, useEffect, useState } from "react";
import StarRating from "react-native-star-rating";

import StoreService, { StoreProps } from "../../services/StoreService";

import {
  Container,
  StoreContainer,
  StoreNameText,
  StoreAddressText,
  StoreRatingsContainer,
  StoreRatingText,
} from "./styles";

interface ListCoffeesParams {
  latitude: number;
  longitude: number;
}

const ListCoffees: React.FC<ListCoffeesParams> = ({ latitude, longitude }) => {
  const [stores, setStores] = useState<StoreProps[]>([]);

  const loadNearestStores = useCallback(() => {
    try {
      StoreService.index(latitude, longitude).then((response) => {
        setStores(response.data);
      });
    } catch (error) {
      setStores([]);
    }
  }, []);

  useEffect(() => {
    loadNearestStores();
  }, [latitude, longitude]);

  return (
    <Container>
      {stores &&
        stores.map((store, index) => {
          return (
            <StoreContainer key={index}>
              <StoreNameText>{store.name}</StoreNameText>

              <StoreAddressText>{store.address}</StoreAddressText>

              <StoreRatingsContainer>
                <StarRating
                  disabled={true}
                  rating={store?.ratings_average ? store.ratings_average : 0}
                  maxStars={5}
                  starSize={15}
                  fullStarColor="yellow"
                />
                <StoreRatingText>
                  {store.ratings_count} Opiniões
                </StoreRatingText>
              </StoreRatingsContainer>
            </StoreContainer>
          );
        })}
    </Container>
  );
};

export default ListCoffees;
