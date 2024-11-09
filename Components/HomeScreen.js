import { View, Text } from "react-native"
import AppBackground from "./AppBackgroundColor"
import FirstComponent from "./HomeScreenComponents/FirstComponent"

const HomeScreen = () => {
    return(
        <AppBackground>
            <FirstComponent />
        </AppBackground>
    )
}

export default HomeScreen