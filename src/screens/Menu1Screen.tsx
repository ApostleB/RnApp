import { useColorScheme, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getStyles } from './Menu1Screen.styles';

export function Menu1Screen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://localhost:3000' }}
        style={styles.webview}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}
