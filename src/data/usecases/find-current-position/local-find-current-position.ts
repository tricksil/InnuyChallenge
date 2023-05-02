import { GetLocation } from '@/data/protocols';
import { PermissionDenied } from '@/domain/error/permission-danied';
import { LocationModel } from '@/domain/models';
import { FindCurrentPosition } from '@/domain/usecases';

export class LocalFindCurrentPosition implements FindCurrentPosition {
  constructor(private readonly getLocation: GetLocation) {}
  async coords(): Promise<LocationModel> {
    try {
      return await this.getLocation.get();
    } catch (error) {
      throw new PermissionDenied();
    }
  }
}
