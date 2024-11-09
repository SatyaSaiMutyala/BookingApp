import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../LoginScreens/LoginScreen";
import { StyleSheet } from "react-native";
import AppBackground from "../AppBackgroundColor";
import OtpScreen from "../LoginScreens/OtpScreen";
import HomeScreen from "../HomeScreen";
import { Image } from "react-native";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
              <NavigationContainer>
                <AppBackground>
                    <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#dec9e9'}, headerTitleStyle: {fontWeight: 'bold'} , headerTitleAlign: 'center'}}>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle: 'Sign In'}} />
                        <Stack.Screen name="Otp" component={OtpScreen} options={{headerTitle:'Sign In'}} />
                        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: 'Online Care'}} />
                    </Stack.Navigator>
                </AppBackground>
            </NavigationContainer>

        </>
    )
}

export default StackNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})