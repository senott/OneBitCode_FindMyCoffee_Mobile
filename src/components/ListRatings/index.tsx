import React, { useCallback, useEffect, useState } from "react";
import StarRating from "react-native-star-rating";

import StoreService, { StoreProps } from "../../services/StoreService";
import { EstablishmentProps } from "../../services/EstablishmentService";
import {
  Container,
  TextOpinion,
  Separator,
  RatingContainer,
  RatingUserText,
  RatingText,
  RatingsHeader,
} from "./styles";

interface ListRatingsParams {
  place: EstablishmentProps;
}

const ListRatings: React.FC<ListRatingsParams> = ({ place }) => {
  const [store, setStore] = useState<StoreProps | undefined>(undefined);

  const getStore = useCallback(() => {
    try {
      StoreService.show(place.place_id!).then((response) => {
        setStore(response.data);
      });
    } catch (error) {
      setStore(undefined);
    }
  }, []);

  useEffect(() => {
    getStore();
  }, [place]);

  return (
    <Container>
      <RatingsHeader>
        <TextOpinion>
          {store?.ratings_count && store.ratings_count > 0
            ? store?.ratings_count
            : 0}{" "}
          Opiniões
        </TextOpinion>
        <StarRating
          disabled={true}
          rating={store?.ratings_average ? store.ratings_average : 0}
          maxStars={5}
          starSize={20}
          fullStarColor="yellow"
        />
      </RatingsHeader>
      <Separator />
      {store?.ratings &&
        store.ratings.map((rating, index) => {
          return (
            <RatingContainer key={index}>
              <RatingsHeader>
                <RatingUserText>{rating.user_name}</RatingUserText>
                <StarRating
                  disabled={true}
                  rating={rating.value ? rating.value : 0}
                  maxStars={5}
                  starSize={20}
                  fullStarColor="yellow"
                />
              </RatingsHeader>
              <RatingText>{rating.opinion}</RatingText>
              <RatingText>{rating.date}</RatingText>
            </RatingContainer>
          );
        })}
    </Container>
  );
};

export default ListRatings;
