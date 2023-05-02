import { GetLocation } from '@/data/protocols';
import { LocationModel } from '@/domain/models';
import { FindCurrentPosition } from '@/domain/usecases';

export class LocalFindCurrentPosition implements FindCurrentPosition {
  constructor(private readonly getLocation: GetLocation) {}
  async coords(): Promise<LocationModel> {
    return await this.getLocation.get();
  }
}
