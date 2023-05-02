import { FindCurrentPosition } from '@/domain/usecases/find-current-position';

export class LocalFindCurrentPosition implements FindCurrentPosition {
  async coords(): Promise<void> {}
}
