import api from './api';

interface RatingProps {
  value: number;
  opinion: string;
  user_name: string;
  date?: string;
}

export interface StoreProps {
  latitude: number,
  longitude: number,
  name: string,
  address: string,
  google_place_id: string
  ratings_count?: number,
  ratings_average?: number,
  ratings?: RatingProps[]
}

const StoreService = {
  show: (google_place_id: string) => api.get(`/stores/${google_place_id}`),
  index: (latitude: number, longitude: number) => api.get('/stores', {params: {latitude, longitude}})
}

export default StoreService;