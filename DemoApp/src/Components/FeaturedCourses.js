import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import colors from "../utils/colors"
import textStyles from "../constants/textStyles"

const FeaturesCourseList=({list,horizontal})=>{
    const renderList=({item,index})=>{
        return(
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require("../assets/Feature.png")}/>
                <View style={{paddingHorizontal:12}}>
                {item?.category && <Text style={[textStyles.smallText2,{padding:4,backgroundColor:"#335EF714",color:colors.primary,borderRadius:8}]}>{item?.category}</Text>}  
                 <Text numberOfLines={1} style={[textStyles.heading,{width:160,paddingVertical:4,color:colors.black}]}>{item?.title || item?.name}</Text>
                 <View style={styles.priceContainer}>
                    <Text style={[textStyles.normalText,{color:colors.primary}]}>{item?.price || item?.position}</Text>
                    <Text style={[textStyles.normalText,{textDecorationLine:"line-through"}]} >{item?.original_price}</Text>
                 </View>
                 {item?.rating || item?.students ?
                 <View style={styles.priceContainer}>
                 <Image source={require('../assets/icons/Star.png')}/>
                 <Text style={[textStyles.smallText]}>{item?.rating} |</Text>
                 <Text style={[textStyles.smallText]} >{item?.students} students</Text> 
                 </View>
                  :<View>
                    </View>}
                </View>
            </View>
        )
    }
    return(
        <FlatList
        data={list}
        renderItem={renderList}
        horizontal={horizontal}
        />
    )

}
export default FeaturesCourseList
const styles=StyleSheet.create({
    container:{
        padding:16,
        flexDirection:"row",
        backgroundColor:colors.white,
        borderRadius:32,
        marginRight:8,
        marginBottom:8
    },
    imageStyle:{
        height:120,
        width:120,
        borderRadius:20,
        resizeMode:"contain"
    },
    innerContainer:{
        flexDirection:"column"

    },
    priceContainer:{
        flexDirection:"row",
        gap:10,
        marginTop:5,
        alignItems:"center"
    }
})