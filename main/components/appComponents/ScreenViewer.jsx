import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from '../../routes/MainRoutes';
import { ErrorProvider } from '../../utils/context/errorContext';

export default function ScreenViewer() {
  return (
    <NavigationContainer>
      <ErrorProvider>
        <MainRoutes />
      </ErrorProvider>
    </NavigationContainer>
  )
}