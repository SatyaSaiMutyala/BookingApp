import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import LoginScreen from "../LoginScreens/LoginScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import AppBackground from "../AppBackgroundColor";
import OtpScreen from "../LoginScreens/OtpScreen";

const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>
                <AppBackground>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} options={{
                            headerTitle: '',
                        }} />
                        <Stack.Screen name="Otp" component={OtpScreen} options={{
                            headerTitle:'',
                        }} />
                        <Stack.Screen name="Home" component={Home} />
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