import { FlatList, View ,TouchableOpacity, Image, Text, StyleSheet} from "react-native"
import { highlightsData } from "../data/highlights"
import colors from "../utils/colors"
import { windowHeight, windowWidth } from "../utils/constants"
import textStyles from "../utils/textStyles"

const Highlights=({navigation})=>{
    const renderHighlights =({item,index})=>{
        return(
            <TouchableOpacity style={styles.highlightCard} onPress={()=>navigation.navigate(item.title,item)}>
                <Image source={item?.image} style={styles.image}/>
                <View style={styles.innerContainer}>
                <Text style={[textStyles.heading,{color:colors.primaryColor,paddingVertical:10}]}>
                    {item?.title}
                </Text>
                <Text style={[textStyles.mediumText,{color:colors.black}]}>
                    {item?.tagline}
                </Text>
                </View>
                <Image style={styles.arrow} source={require('../assets/images/arrow.png')}/>
               
            </TouchableOpacity>
        )

    }

    return(
            <FlatList
             contentContainerStyle={{marginTop:16,marginBottom:10}}
             horizontal
             data={highlightsData}
             showsHorizontalScrollIndicator={false}
             renderItem={renderHighlights}
             keyExtractor={(item,index)=>index.toString()}
             />
    )

}
export default Highlights
const styles=StyleSheet.create({
    highlightCard:{
        borderRadius:8,
        marginRight:10,
        backgroundColor:colors.white,
        height:windowHeight*48/100,
        elevation:3,
        zIndex:100,
        backfaceVisibility:"visible"
        
    },
    image:{
        borderRadius:8,
    },
    innerContainer:{
        padding:16,
    },
    arrow:{
        alignSelf:"flex-end",
        marginHorizontal:30
    }
})