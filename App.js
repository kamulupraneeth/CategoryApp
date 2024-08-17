import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import WelcomeScreen from "./src/components/WelcomeScreen";
import CategoriesScreen from "./src/components/CategoriesScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen}/>
          <Tab.Screen name="Categories" component={CategoriesScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default App;