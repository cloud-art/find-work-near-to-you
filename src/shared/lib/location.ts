import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, RESULTS } from 'react-native-permissions';
import { requestPermission } from './permissions';

export type Coords = { latitude: number; longitude: number };

export const getCurrentLocation = async (): Promise<Coords> => {
  const permission = Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  });

  const status = await requestPermission(permission);
  if (status !== RESULTS.GRANTED)
    throw new Error('Location permission not granted');

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        resolve({ latitude, longitude });
      },
      err => reject(err),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  });
};
