import { Image, StyleSheet, View } from "react-native"
import colors from "../utils/colors"

const Header=()=>{
    return(
        <View style={styles.headercontainer}>
            <Image source={require('../assets/images/Aloha.png')} resizeMode="contain"/>
        </View>
    )

}
export default Header
const styles=StyleSheet.create({
    headercontainer:{
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:20

    }
})