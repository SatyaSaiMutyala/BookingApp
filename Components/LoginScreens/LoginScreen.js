import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AppBackground from "../AppBackgroundColor";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [number, setNumber] = useState('');
  const navigation = useNavigation();

  const handleClick = () => {
    console.log('this is number ----->', number);
    navigation.navigate('Otp');
  };

  return (
    <>
      <AppBackground>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.firstText}>Sign In</Text>
            <Text style={styles.secondText}>Please Enter your Phone Number</Text>
            <View style={styles.textInputContainer}>
              <Ionicons name="call" size={24} color="rgba(255, 255, 255, 0.5)" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Please Enter your Number"
                onChangeText={(e) => setNumber(e)}
                maxLength={10} 
                keyboardType="number-pad" 
                autoCapitalize='none' 
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
              <Text style={styles.button}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </AppBackground>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 5,
    padding: 15,
    width: '90%',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
    
  },
  secondText: {
    fontSize: 16,
    marginBottom: 8
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dec9e9',
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 10,
    width: '100%',
    marginVertical: 15,
    borderRadius: 7,
 
  },
  icon: {
    marginRight: 10,
    color: '#3f288d',
  },
  input: {
    fontSize: 18,
    color: 'black',
    flex: 1,
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#3f288d',
    width: '100%',
    
    shadowRadius: 5, 
    borderRadius: 8
  }
  ,
  button: {
    fontSize: 18,
    paddingHorizontal: 5,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});
