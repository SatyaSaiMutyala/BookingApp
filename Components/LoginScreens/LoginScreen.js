import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AppBackground from "../AppBackgroundColor";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
const [number, setNumber] = useState('');
const navigation = useNavigation();

const handleClick = () => {
    console.log('this is number ----->', number)
    navigation.navigate('Otp')
}
    return (
        <>
        <AppBackground>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.firstText}>Sign In</Text>
                    <Text style={styles.secondText}>Please Enter your Phone Number</Text>
                    <View style={styles.textInput}>
                        <TextInput style={styles.inputcolor} placeholder='Please Enter Your Phone Number' placeholderTextColor="rgba(255, 255, 255, 0.5)" onChangeText={ (e) => setNumber(e)}  />
                    </View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
                            <Text style={styles.button}>Get OTP</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </AppBackground>
        </>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    innerContainer: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 15,
        width:'90%',       
        elevation:1,
        justifyContent:'center',
        alignItems:'center'
    },
    firstText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5
    },
    secondText: {
        fontSize: 16,
        color: '#ccc'
    },
    textInput: {
        borderColor: '#ffffff',
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 10,
        width: '100%',
        marginVertical: 15,
        borderRadius: 7,

    },
    buttonContainer: {
        borderRadius: 5, borderWidth: 1, borderColor: '#010836', padding: 10, backgroundColor: '#010836',width:'100%'
    },
    button: {
        fontSize: 18,
        paddingHorizontal: 5,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign:'center'
    },
    inputcolor: {
        color: '#ffffff',
        fontSize: 18
    }
})

