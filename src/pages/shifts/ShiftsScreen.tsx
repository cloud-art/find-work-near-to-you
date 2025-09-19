import { getShifts, useQuery } from '@/shared/api';
import { AppNavigationStacks, AppNavProp } from '@/shared/navigation';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { ShiftsList } from './ui';

export const ShiftsScreen: FC = () => {
  const { data, error, loading } = useQuery({
    queryFn: () => getShifts({ latitude: 0, longitude: 0 }),
  });
  const navigation = useNavigation<AppNavProp>();

  return (
    <View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      {data ? (
        <ShiftsList
          shifts={data}
          onItemPress={shift =>
            navigation.navigate(AppNavigationStacks.SHIFT_DETAILED_SCREEN, {
              shift,
            })
          }
        />
      ) : (
        !loading && <Text>No shifts available</Text>
      )}
    </View>
  );
};
