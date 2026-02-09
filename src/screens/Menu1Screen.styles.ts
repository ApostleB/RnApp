import { StyleSheet } from 'react-native';
import { colors } from '../styles';

export const getStyles = (isDarkMode: boolean) => {
  const theme = isDarkMode ? colors.dark : colors.light;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    webview: {
      flex: 1,
    },
  });
};
