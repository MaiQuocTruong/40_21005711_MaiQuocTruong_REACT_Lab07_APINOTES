import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterLogin from './screens/RegisterLogin';
import NoteList from './screens/NoteList';
import AddUpdateNote from './screens/AddUpdateNote';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
        <Stack.Screen name="NoteList" component={NoteList} />
        <Stack.Screen name="AddUpdateNote" component={AddUpdateNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
