import React from 'react';
import { makeLocalFindCurrentPosition } from '@/main/factories/usecases/find-current-position/local-find-current-position-factory';
import Home from '@/presentation/screen/home/home';

export const HomeFactory: React.FC = () => {
  return <Home findCurrentPosition={makeLocalFindCurrentPosition()} />;
};
