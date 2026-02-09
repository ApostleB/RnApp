import { Text, useColorScheme, View } from 'react-native';
import { getStyles } from './ProfileScreen.styles';

export function ProfileScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>프로필</Text>
      <Text style={styles.subtitle}>프로필 페이지입니다.</Text>
    </View>
  );
}
