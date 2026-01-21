import { logger } from '@/utils/logger';
import * as SecureStore from 'expo-secure-store';

const ACCESS_KEY = 'access_token';
const REFRESH_KEY = 'refresh_token';

async function safe<T>(fn: () => Promise<T>, fallback: T) {
  try {
    return await fn();
  } catch (err) {
    logger.warn('Storage operation failed:', err);
    return fallback;
  }
}

export const storage = {
  async setTokens(accessToken: string, refreshToken: string): Promise<void> {
    await safe(async () => {
      await Promise.all([
        SecureStore.setItemAsync(ACCESS_KEY, accessToken),
        SecureStore.setItemAsync(REFRESH_KEY, refreshToken),
      ]);
    }, undefined);
  },

  async getAccessToken(): Promise<string | null> {
    return safe(async () => await SecureStore.getItemAsync(ACCESS_KEY), null);
  },

  async getRefreshToken(): Promise<string | null> {
    return safe(async () => await SecureStore.getItemAsync(REFRESH_KEY), null);
  },

  async clearTokens(): Promise<void> {
    await safe(async () => {
      await Promise.all([
        SecureStore.deleteItemAsync(ACCESS_KEY),
        SecureStore.deleteItemAsync(REFRESH_KEY),
      ]);
    }, undefined);
  },
};
