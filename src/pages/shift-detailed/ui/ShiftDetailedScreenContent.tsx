import { Shift } from '@/shared/api';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShiftCard } from './ShiftCard';

export type ShiftDetailedScreenContentProps = {
  shift: Shift;
};

export const ShiftDetailedScreenContent: FC<
  ShiftDetailedScreenContentProps
> = ({ shift }) => {
  return (
    <View style={styles.container}>
      <Text>Shift Card:</Text>

      <ShiftCard shift={shift} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});
