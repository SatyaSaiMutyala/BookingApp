import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AppBackground from '../AppBackgroundColor';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const navigation = useNavigation()
  const  handleVerification = () => {
        navigation.navigate('Home')
    }
    return (
        <>
            <AppBackground>
                <View style={styles.container}>
                    <View style={styles.innerContaier}>
                        <View>
                            <Text style={styles.title}>Verify OTP </Text>
                            <Text style={styles.subText}>We have send an OTP to your </Text>
                            <Text style={styles.subText}>"Phone Number"</Text>
                        </View>
                        <View style={styles.InputView}>
                            <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" />
                            <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" />
                            <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" />
                            <TextInput style={styles.input} maxLength={1} keyboardType="number-pad" />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.text}>Resend Otp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={handleVerification}>
                            <Text style={styles.button}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </AppBackground>
        </>
    )
}

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContaier: {
        backgroundColor: 'white',
        width: '90%',
        padding: 15,
        borderRadius: 5,
        elevation: 8
    },
    textView: {
        display: 'block',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#062726',
        marginBottom: 8
    },
    subTitle: {
        fontSize: 15,
        color: '#ccc',
        textAlign: 'center',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    subText: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 2,
        color: '#062726'
    },
    InputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 25,

    },
    input: {
        borderWidth: 2,
        borderColor: '#dec9e9',
        borderRadius: 10,
        width: 50,
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        color: '#230c33',
    },
    text: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingVertical: 10,
        marginBottom: 10,
        color: '#062726',
    },
    buttonContainer: {
        borderRadius: 5,
        padding: 10, backgroundColor: '#3f288d', width: '100%',
    },
    button: {
        fontSize: 18,
        paddingHorizontal: 5,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})