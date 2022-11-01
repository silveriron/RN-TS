import { NavigationContainer } from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "./components/Home";
import User from "./components/User";

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="User" component={User} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
