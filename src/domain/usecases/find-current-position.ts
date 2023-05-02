import { LocationModel } from '@/domain/models';

export interface FindCurrentPosition {
  coords: () => Promise<LocationModel>;
}
