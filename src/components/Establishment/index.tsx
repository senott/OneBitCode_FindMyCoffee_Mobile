import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, View } from "react-native";

import EstablishmentService, {
  EstablishmentProps,
} from "../../services/EstablishmentService";
import { GOOGLE_API_KEY } from "../../../vars";

import noPhoto from "../../images/no_photo-1.jpg";

import {
  Container,
  EstablishmentContainer,
  ScrollView,
  ButtonContainer,
  Photo,
  Title,
  BoldText,
  Separator,
  ScheduleText,
  Footer,
  FooterText,
} from "./styles";

interface EstablishmentParams {
  place: EstablishmentProps;
}

const Establishment: React.FC<EstablishmentParams> = ({ place }) => {
  const [establishment, setEstablishment] = useState<
    EstablishmentProps | undefined
  >(undefined);

  const getEstablishmentInfo = useCallback(() => {
    try {
      EstablishmentService.show(place.place_id!).then((response) => {
        setEstablishment(response.data.result);
      });
    } catch (error) {
      setEstablishment(undefined);
    }
  }, [place]);

  useEffect(() => {
    getEstablishmentInfo();
  }, [place]);

  return (
    <Container>
      {establishment && (
        <EstablishmentContainer>
          <ButtonContainer>
            <Button
              title="x"
              color="white"
              onPress={() => setEstablishment(undefined)}
            />
          </ButtonContainer>

          <ScrollView>
            {establishment.photos ? (
              <Photo
                source={{
                  uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${establishment.photos[0].photo_reference}&sensor=false&key=${GOOGLE_API_KEY}`,
                }}
              />
            ) : (
              <Photo source={noPhoto} />
            )}

            <Title>{establishment.name}</Title>
            {establishment.opening_hours ? (
              <View>
                {establishment.opening_hours.open_now === true ? (
                  <BoldText>Aberto</BoldText>
                ) : (
                  <BoldText>Fechado</BoldText>
                )}

                <Separator />

                {establishment.opening_hours.weekday_text.map(
                  (schedule, index) => {
                    return <ScheduleText key={index}>{schedule}</ScheduleText>;
                  }
                )}
              </View>
            ) : (
              <View>
                <Separator />
                <ScheduleText>
                  Horários de funcionamento não informados.
                </ScheduleText>
              </View>
            )}
            <Separator />
            <ScheduleText>{establishment.formatted_address}</ScheduleText>
          </ScrollView>
          <Footer>
            <FooterText>Café selecionado</FooterText>
          </Footer>
        </EstablishmentContainer>
      )}
    </Container>
  );
};

export default Establishment;
