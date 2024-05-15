import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native'
import HomeScreen from '../components/HomeScreen.jsx';
import FeedbackScreen from '../components/FeedbackScreen.jsx'
import ChatScreen from '../components/ChatScreen.jsx';
import UpcomingFeatures from '../components/homeComponents/infoScreens/UpcomingFeatures.jsx';
import CurrentFeatures from '../components/homeComponents/infoScreens/CurrentFeatures.jsx';





export default function MainRoutes() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="feedback" component={FeedbackScreen} options={{ headerShown: false }} />
            <Stack.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name="upcoming" component={UpcomingFeatures} options={{ headerShown: false }} />
            <Stack.Screen name="current" component={CurrentFeatures} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}