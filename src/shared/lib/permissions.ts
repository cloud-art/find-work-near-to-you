import type { Permission } from 'react-native-permissions';

import { check, request } from 'react-native-permissions';

export const requestPermission = async (permission?: Permission) => {
  if (!permission) return 'unavailable';

  try {
    let status = await check(permission);

    if (status === 'denied') status = await request(permission);

    return status;
  } catch {
    console.error(`Request (${permission}) permission error:`);
  }
};
