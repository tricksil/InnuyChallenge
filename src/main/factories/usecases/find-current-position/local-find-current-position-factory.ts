import { makeExpoLocationAdapter } from '@/main/factories/location/expo-location-adapter-factory';
import { FindCurrentPosition } from '@/domain/usecases';
import { LocalFindCurrentPosition } from '@/data/usecases';

export const makeLocalFindCurrentPosition = (): FindCurrentPosition => {
  return new LocalFindCurrentPosition(makeExpoLocationAdapter());
};
