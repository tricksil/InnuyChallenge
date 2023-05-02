import * as Location from 'expo-location';

import { LocalLocationModel } from '@/data/models';
import { GetLocation } from '@/data/protocols';

export class ExpoLocationAdapter implements GetLocation {
  async get(): Promise<LocalLocationModel> {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      throw new Error();
    }

    const { coords }: Location.LocationObject =
      await Location.getCurrentPositionAsync({});

    return coords;
  }
}
