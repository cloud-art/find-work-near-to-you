import { getShifts } from '@/shared/api';
import { getCurrentLocation } from '@/shared/lib/location';
import { usePromiseState } from '@/shared/lib/promise-state';
import { AppNavigationStacks, AppNavProp } from '@/shared/navigation';
import { useNavigation } from '@react-navigation/native';
import { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { ShiftsList } from './ui';

export const ShiftsScreen: FC = () => {
  const navigation = useNavigation<AppNavProp>();

  const geoolocationData = usePromiseState({
    promiseFn: getCurrentLocation,
  });

  const queryData = usePromiseState({
    enabled: !!geoolocationData.data,
    promiseFn: () =>
      getShifts({
        latitude: geoolocationData.data?.latitude,
        longitude: geoolocationData.data?.longitude,
      }),
  });

  const isLoading = useMemo(
    () => queryData.loading || geoolocationData.loading,
    [queryData.loading, geoolocationData.loading],
  );

  const errorText = useMemo(() => {
    if (geoolocationData.error) return 'Error with getting geolocation';
    else if (queryData.error) return 'Error with query fetching';
  }, [queryData.error, geoolocationData.error]);

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}

      {errorText && <Text>{errorText}</Text>}

      {queryData.data?.length ? (
        <ShiftsList
          shifts={queryData.data}
          onItemPress={shift =>
            navigation.navigate(AppNavigationStacks.SHIFT_DETAILED_SCREEN, {
              shift,
            })
          }
        />
      ) : (
        !isLoading && <Text>No shifts available</Text>
      )}
    </View>
  );
};
