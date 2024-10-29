import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AppBackground from '../AppBackgroundColor';

const OtpScreen = () => {
    return (
        <>
        <AppBackground>
        <View style={styles.container}>
            <View style={styles.innerContaier}>
                <View>
                    <Text style={styles.title}>Verify OTP </Text>
                    <Text style={styles.subTitle}>We have send an OTP to your </Text>
                    <Text style={styles.subText}>Phone Number</Text>
                </View>
                <View style={styles.InputView}>
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad"   />
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad"   />
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad"   />
                    <TextInput style={styles.input} maxLength={1} keyboardType="number-pad"   />
                </View>
                <TouchableOpacity>
                    <Text style={styles.text}>Re-Send OTP ?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
        </AppBackground>
        </>
    )
}

export default OtpScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent : 'center',
        alignItems:'center'
    },
    innerContaier : {
        borderWidth:1,
        borderColor:'#ffffff',
        width:'90%',
        padding:15,
        borderRadius:5,
        elevation:1
    },
    textView : {
        display:'block',
    },
    title : {
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    subTitle : {
        fontSize:18,
        color:'#ccc',
        textAlign:'center',
        marginVertical:3,
        fontWeight:'bold'
    },
    subText : {
        fontSize:18,
        textAlign:'center',
        marginVertical:3,
        fontWeight:'bold'
    },
    InputView : {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
        paddingHorizontal:25
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        borderBottomRadius: 5,
        width: 50,
        height: 50,
        fontSize: 20,
        textAlign: 'center',
    },
    text : {
        fontSize:19,
        fontWeight:'bold',
        textAlign:'center',
        paddingVertical:10,
        color:'#ffffff',
    },
    buttonContainer: {
        borderRadius: 5, borderWidth: 1, borderColor: '#010836', padding: 10, backgroundColor: '#010836',width:'100%',
    },
    button: {
        fontSize: 18,
        paddingHorizontal: 5,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign:'center'
    },
}) 