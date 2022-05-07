import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from './screens/News';
import NewsView from './screens/NewsView';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
  },
};


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer theme={MyTheme} >
        <Stack.Navigator initialRouteName='News' screenOptions={{
            headerStyle: { backgroundColor: "#521cb8" },
            headerTitle: "Dhannveen NEWS",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "900",
              fontSize: 25

            }
          }} >
          <Stack.Screen name="News" component={News} options={{ title: 'Dhannveen NEWS', headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold"
          }}} />
          <Stack.Screen name="NewsView" component={NewsView} options={{ title: 'Dhannveen NEWS', headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold"
          }}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

