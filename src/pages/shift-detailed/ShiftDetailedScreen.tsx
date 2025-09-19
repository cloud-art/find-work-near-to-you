import { AppNavigationStacks, RootStackParamList } from '@/shared/navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FC } from 'react';
import { Text, View } from 'react-native';
import { ShiftDetailedScreenContent } from './ui';

export const ShiftDetailedScreen: FC = () => {
  const { params } =
    useRoute<
      RouteProp<RootStackParamList, AppNavigationStacks.SHIFT_DETAILED_SCREEN>
    >();

  return (
    <View>
      {params?.shift ? (
        <ShiftDetailedScreenContent shift={params.shift} />
      ) : (
        <Text>Не получилось достать информацию о подработке</Text>
      )}
    </View>
  );
};
