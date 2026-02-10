import { Text, useColorScheme, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getStyles } from './Menu2Screen.styles';


export function Menu2Screen() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Calendar current={'2022-03-01'} onDayPress={(day) => {
        console.log('day', day);
      }}/>
      {/*<Text style={styles.title}>메뉴 2</Text>*/}
      {/*<Text style={styles.subtitle}>메뉴 2 페이지입니다.</Text>*/}
    </View>
  );
}
