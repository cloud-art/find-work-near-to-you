import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Shift } from './api';

export enum AppNavigationStacks {
  SHIFTS_SCREEN = 'ShiftsScreen',
  SHIFT_DETAILED_SCREEN = 'ShiftDetailedScreen',
}

export type RootStackParamList = {
  [AppNavigationStacks.SHIFTS_SCREEN]: undefined;
  [AppNavigationStacks.SHIFT_DETAILED_SCREEN]: { shift?: Shift } | undefined;
};

export type AppNavProp = NativeStackNavigationProp<RootStackParamList>;
