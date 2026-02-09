import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './src/App';
import { name as appName } from './app.json';

// Enable react-native-screens for better performance
enableScreens();

AppRegistry.registerComponent(appName, () => App);
