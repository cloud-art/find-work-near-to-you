import { AppNavigationStacks, AppNavProp } from '@/shared/navigation';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { Button, Text, View } from 'react-native';

export const JobsScreen: FC = () => {
  const navigation = useNavigation<AppNavProp>();

  return (
    <View>
      <Text>Jobs Screen</Text>

      <Button
        title="Go to Job Screen"
        onPress={() =>
          navigation.navigate(AppNavigationStacks.JOB_DETAILED_SCREEN)
        }
      />
    </View>
  );
};
