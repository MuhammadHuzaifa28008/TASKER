import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native'
import HomeScreen from '../components/HomeScreen.jsx';
import FeedbackScreen from '../components/FeedbackScreen.jsx'
import ChatScreen from '../components/ChatScreen.jsx';





export default function MainRoutes() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="feedback" component={FeedbackScreen} options={{ headerShown: false }} />
            <Stack.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}