import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../utils/colors"
import { travelGuide } from "../data/highlights"
import textStyles from "../utils/textStyles"

const TravelGuideCard=()=>{

    return(
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <View>
                <Text style={textStyles.heading}>
                 {travelGuide.name}
                </Text>
                <Text style={textStyles.normalText}>
                    {travelGuide.guide_since}
                </Text>
                </View>
                <Image source={travelGuide.image}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={[textStyles.smallText,{color:colors.primaryColor}]}>Contact</Text>
            </TouchableOpacity>
        </View>
    )

}
export default TravelGuideCard
const styles=StyleSheet.create({
    container:{
        borderRadius:8,
        backgroundColor:colors.white,
        padding:16,
        marginTop:18,
        height:180

    },
    innercontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    button:{
        alignItems:"center",
        justifyContent:"center",
        borderWidth:2,
        borderColor:colors.primaryColor,
        height:40,
        borderRadius:6,
        width:120,
        marginTop:14
    }

})