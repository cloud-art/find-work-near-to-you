import { Shift } from '@/shared/api';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type ShiftCardProps = {
  shift: Shift;
};

export const ShiftCard: FC<ShiftCardProps> = ({ shift }) => {
  return (
    <View style={styles.card}>
      <Text>{shift.companyName}</Text>
      <Text>{shift.address}</Text>
      <Text>{shift.priceWorker}</Text>
      <Text>{shift.bonusPriceWorker}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
