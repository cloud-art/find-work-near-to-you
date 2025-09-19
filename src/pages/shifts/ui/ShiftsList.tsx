import { Shift } from '@/shared/api';
import { FC } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export type ShiftsListProps = {
  shifts: Shift[];
  onItemPress: (shift: Shift) => void;
};

export const ShiftsList: FC<ShiftsListProps> = ({ shifts, onItemPress }) => {
  return (
    <FlatList
      data={shifts}
      renderItem={({ item }) => (
        <Pressable>
          <View onTouchEnd={() => onItemPress(item)}>
            <Text>{item.companyName}</Text>
          </View>
        </Pressable>
      )}
    />
  );
};

const style = StyleSheet.create({});
