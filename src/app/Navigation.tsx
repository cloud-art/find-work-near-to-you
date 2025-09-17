import { JobDetailedScreen } from '@/pages/job-detailed';
import { JobsScreen } from '@/pages/jobs';
import { AppNavigationStacks, RootStackParamList } from '@/shared/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppNavigationStacks.JOBS_SCREEN}
      component={JobsScreen}
      options={{ title: 'Подработки' }}
    />
    <Stack.Screen
      name={AppNavigationStacks.JOB_DETAILED_SCREEN}
      component={JobDetailedScreen}
    />
  </Stack.Navigator>
);

export const Navigation = RootStack;
