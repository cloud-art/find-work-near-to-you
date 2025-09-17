import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum AppNavigationStacks {
  JOBS_SCREEN = 'JobsScreen',
  JOB_DETAILED_SCREEN = 'JobDetailedScreen',
}

export type RootStackParamList = {
  [AppNavigationStacks.JOBS_SCREEN]: undefined;
  [AppNavigationStacks.JOB_DETAILED_SCREEN]: { jobId?: string } | undefined;
};

export type AppNavProp = NativeStackNavigationProp<RootStackParamList>;
