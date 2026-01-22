import { storage } from '@/services/storage';
import { setTokens } from '@/store/features/auth/authSlice';
import { AppDispatch } from '@/store/store';

export async function bootstrapAuth(dispatch: AppDispatch): Promise<boolean> {
  try {
    const accessToken = await storage.getAccessToken();
    const refreshToken = await storage.getRefreshToken();

    if (accessToken && refreshToken) {
      dispatch(setTokens({ accessToken, refreshToken }));
      return true;
    }
  } catch (error) {
    console.warn('Error during auth bootstrap:', error);
  }
  return false;
}
