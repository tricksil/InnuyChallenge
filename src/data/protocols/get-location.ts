import { LocalLocationModel } from '@/data/models';

export interface GetLocation {
  get: () => Promise<LocalLocationModel>;
}
