import { Shift } from '@/shared/api';
import { FC } from 'react';
import { View } from 'react-native';
import { ShiftCard } from './ShiftCard';

export type ShiftDetailedScreenContentProps = {
  shift: Shift;
};

export const ShiftDetailedScreenContent: FC<
  ShiftDetailedScreenContentProps
> = ({ shift }) => {
  return (
    <View>
      <ShiftCard shift={shift} />
    </View>
  );
};
