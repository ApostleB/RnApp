import { Alert, Button, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { getStyles } from './HomeScreen.styles';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  const handlePress = () => {
    Alert.alert('버튼 클릭!', '버튼이 눌렸습니다.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>환영합니다!</Text>
      <Text style={styles.subtitle}>여기에 원하는 문구를 작성하세요</Text>

      {/* 기본 Button 컴포넌트 */}
      <Button title="기본 버튼" onPress={handlePress} />

      {/* 커스텀 TouchableOpacity 버튼 */}
      <TouchableOpacity style={styles.customButton} onPress={handlePress}>
        <Text style={styles.customButtonText}>커스텀 버튼</Text>
      </TouchableOpacity>
    </View>
  );
}
