import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../styles';

export const getStyles = (isDarkMode: boolean) => {
  const theme = isDarkMode ? colors.dark : colors.light;

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    title: {
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.bold,
      marginBottom: spacing.sm,
      color: theme.text,
    },
    subtitle: {
      fontSize: typography.fontSize.base,
      marginBottom: spacing.xl,
      color: theme.subtext,
    },
    customButton: {
      marginTop: spacing.lg,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.xl,
      borderRadius: 8,
      backgroundColor: theme.primary,
    },
    customButtonText: {
      color: '#fff',
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
      textAlign: 'center',
    },
  });
};
