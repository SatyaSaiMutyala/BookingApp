import { View, Text, TextInput, StyleSheet } from "react-native";

const FirstComponent = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Find Your Hospital</Text>
                    <Text style={styles.subTitle}>Search with Hospital name or Area</Text>
                </View>
                <View style={styles.innerContainer}>
                    <TextInput placeholder='Search' style={styles.input} />
                </View>
            </View>
        </>
    )
}

export default FirstComponent;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal:20,
        borderWidth:2,
        borderColor:'red',
    },
    titleContainer : {
        marginVertical:10,
    },
    title : {
        fontSize:23,
        fontWeight:'bold'
    },
    subTitle : {
        fontSize:14,

    },
    innerContainer: {
        width: '90%',
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 7,
        
    },
    input: {
        fontSize: 18,
        color: 'black',
    },
})