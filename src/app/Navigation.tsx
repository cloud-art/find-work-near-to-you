import { ShiftDetailedScreen } from '@/pages/shift-detailed';
import { ShiftsScreen } from '@/pages/shifts';
import { AppNavigationStacks, RootStackParamList } from '@/shared/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AppNavigationStacks.SHIFTS_SCREEN}
      component={ShiftsScreen}
      options={{ title: 'Подработки' }}
    />
    <Stack.Screen
      name={AppNavigationStacks.SHIFT_DETAILED_SCREEN}
      component={ShiftDetailedScreen}
      options={{ title: 'Подробности' }}
    />
  </Stack.Navigator>
);

export const Navigation = RootStack;
