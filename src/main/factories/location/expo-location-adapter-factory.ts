import { ExpoLocationAdapter } from '@/infra/location';

export const makeExpoLocationAdapter = (): ExpoLocationAdapter => {
  return new ExpoLocationAdapter();
};
