import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HomeScreen';
import { Menu1Screen } from './screens/Menu1Screen';
import { Menu2Screen } from './screens/Menu2Screen';
import { ProfileScreen } from './screens/ProfileScreen';
import { colors } from './styles';

const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? colors.dark : colors.light;

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: theme.primary,
            tabBarInactiveTintColor: theme.subtext,
            tabBarStyle: {
              backgroundColor: theme.background,
              borderTopColor: isDarkMode ? '#333' : '#e0e0e0',
            },
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.text,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: '홈',
              tabBarLabel: '홈',
            }}
          />
          <Tab.Screen
            name="Menu1"
            component={Menu1Screen}
            options={{
              title: '메뉴 1',
              tabBarLabel: '메뉴1',
            }}
          />
          <Tab.Screen
            name="Menu2"
            component={Menu2Screen}
            options={{
              title: '메뉴 2',
              tabBarLabel: '메뉴2',
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: '프로필',
              tabBarLabel: '프로필',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
