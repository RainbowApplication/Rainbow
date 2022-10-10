import {NavigationProp} from '@react-navigation/native';

export type TabParams = {
  Home: undefined;
  Edit: undefined;
};

export type NavProps<T extends keyof TabParams> = {
  navigation: NavigationProp<TabParams, T>;
  route: NavigationProp<TabParams, T>;
};
