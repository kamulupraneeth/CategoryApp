import { Image, StyleSheet, Text, View } from "react-native";
// import getImage from "../utils/getImage";
import { countryFlag,profileImage } from "../utils/getImage";

const WorkerProfile = ({profile}) => {
    console.log('profile',profile);
    return(
        <View style={styles.profileContainer}>
            <Image source={profileImage(profile.profileImage)} style={styles.image}/>
            <Text style={styles.name}>{profile.name}</Text>
            <Image source={countryFlag(profile.countryFlag)} style={styles.countryFlag}/>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer:{
        position:'relative',
        marginLeft:10,
        marginTop:10
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    name:{
        marginTop:10,
        fontSize:16,
        color:'#000'
    },
    countryFlag:{
        width:50,
        height:50,
        position:'absolute',
        right:0
    }
})

export default WorkerProfile;