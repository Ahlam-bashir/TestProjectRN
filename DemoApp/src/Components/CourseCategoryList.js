import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import textStyles from "../constants/textStyles";
import colors from "../utils/colors";

const CourseCatgory=({courseData})=>{
    const images = {
        "finance_basics_icon.png": require('../assets/icons/finance_basics_icon.png'),
        "wealth_building_icon.png": require('../assets/icons/wealth_building_icon.png'),
        "savings_banking_icon.png": require('../assets/icons/savings_banking_icon.png')
      };
    const ListItem=({item,index})=>{
        return(
            <View key={item?.id} style={[style.container,{backgroundColor:item?.icon_color}]}>
                <Image source={images[item.icon]} style={{height:58,resizeMode:"cover",overflow:"hidden"}}/>
                <Text style={[textStyles.smallText,{paddingTop:14,textAlign:"center",color:colors.black}]}>{item?.name}</Text>
            </View>
        )

    }

    return(
        <FlatList
        contentContainerStyle={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}
        data={courseData}
        renderItem={ListItem}
        />
    )

}
export default CourseCatgory
const style=StyleSheet.create({
    container:{
        width:117,
        height:158,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    }
})