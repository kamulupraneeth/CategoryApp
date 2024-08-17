import { StyleSheet, Text,View } from "react-native";

const WelcomeScreen = () => {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    welcomeText:{
        fontSize:24,
        color:'#000'
    }
})
export default WelcomeScreen;