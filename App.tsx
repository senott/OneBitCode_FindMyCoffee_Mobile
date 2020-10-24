import React, { useCallback, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import EstablishmentService, {
  EstablishmentProps,
} from "./src/services/EstablishmentService";
import Establishment from "./src/components/Establishment";

import myLocationIcon from "./src/images/my-location-pin-1.png";
import coffeePinIcon from "./src/images/coffee-big-pin.png";

export default function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locations, setLocations] = useState<EstablishmentProps[]>([]);
  const [selected, setSelected] = useState<EstablishmentProps | undefined>(
    undefined
  );

  const loadCoffees = useCallback(() => {
    if (latitude !== 0 && longitude !== 0) {
      try {
        EstablishmentService.index({ latitude, longitude }).then((response) => {
          setLocations(response.data.results);
        });
      } catch (error) {
        setLocations([]);
        Alert.alert(
          "Ocorreu um erro ao buscar os cafés próximos, tente novamente."
        );
      }
    }
  }, [latitude, longitude]);

  useEffect(() => {
    loadCoffees();
  }, [latitude, longitude]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Ative as permissões de localização para o aplicativo funcionar."
        );
      } else {
        const location = await Location.getCurrentPositionAsync();
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {selected && <Establishment place={selected} />}
      <MapView
        style={styles.map}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
      >
        <Marker
          title="Sua localização"
          coordinate={{ latitude, longitude }}
          image={myLocationIcon}
        />
        {locations &&
          locations.map((location, index) => {
            return (
              <Marker
                key={index}
                title={location.name}
                coordinate={{
                  latitude: Number(location.geometry?.location.lat),
                  longitude: Number(location.geometry?.location.lng),
                }}
                image={coffeePinIcon}
                onPress={() => setSelected(location)}
              />
            );
          })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
