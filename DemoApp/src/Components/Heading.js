import { StyleSheet, Text, View } from "react-native"
import textStyles from "../constants/textStyles"
import colors from "../utils/colors"

const Heading=({title,})=>{

    return(
        <View style={styles.textContainer}>
            <Text style={[textStyles.heading,{color:colors.black}]}>{title}</Text>
            <Text style={[textStyles.normalText,{color:colors.primary}]}>See All</Text>
        </View>
    )

}
export default Heading
const styles=StyleSheet.create({
    textContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row"
    }
})