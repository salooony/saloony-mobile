
// حل مشاكل react-native / Expo
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
}));

jest.mock('expo-constants', () => ({
  expoConfig: {},
}));

