import { StyleSheet, TouchableOpacity,Text } from "react-native"
import colors from "../utils/colors"
import textStyles from "../utils/textStyles"

export const Button=()=>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={[textStyles.mediumText,{color:colors.white}]}>Book a Trip</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        alignItems:"center",
        justifyContent:"center",
        padding:14,
        backgroundColor:colors.primaryColor,
        borderRadius:8,
        margin:14
    }
})