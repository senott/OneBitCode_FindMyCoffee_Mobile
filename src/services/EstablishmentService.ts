import api from './api';

export interface EstablishmentProps extends google.maps.places.PlaceResult {
  photos: google.maps.places.PlaceResult['photos'] & {
    photo_reference: string,
  }[]
  opening_hours: google.maps.places.PlaceResult['opening_hours'] & {
    open_now: boolean,
  }[]
}

interface EstablishmentServiceParams {
  latitude: number;
  longitude: number;
}

const EstablishmentService = {
  index: ({ latitude, longitude }: EstablishmentServiceParams) => 
    api.get(`/google_stores?latitude=${latitude}&longitude=${longitude}`),
  show: (place_id: string) => 
    api.get(`/google_stores/${place_id}`) 
};

export default EstablishmentService;