import { Image, StyleSheet, Text, View } from "react-native"
import textStyles from "../constants/textStyles"

const Header =({data})=>{
    return(
        <View style={styles.headerContainer}>
            <Image source={require(`../assets/userimage.png`)} height={58} width={58}  style={{marginRight:6}}/>
            <View style={{}}>
            <Text style={textStyles.normalText}>{data?.greeting}</Text>
            <Text style={textStyles.heading}>{data?.name}</Text>
            </View> 
        </View>
    )
}
export default Header

const styles=StyleSheet.create({
    headerContainer:{
        flexDirection:"row"


    }

})