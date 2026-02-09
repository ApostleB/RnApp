import { Text, useColorScheme, View } from 'react-native';
import { getStyles } from './Menu1Screen.styles';

export function Menu1Screen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>메뉴 1</Text>
      <Text style={styles.subtitle}>메뉴 1 페이지입니다.</Text>
    </View>
  );
}
