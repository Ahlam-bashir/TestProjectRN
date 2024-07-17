import { FlatList, Image, StyleSheet, View ,Text} from "react-native"
import { categories } from "../data/highlights"
import colors from "../utils/colors"
import textStyles from "../utils/textStyles"

const TopSpots=({data})=>{
    const renderTopSpots=({item,index})=>{
        return(
            <View style={styles.container}>
                
                <Text style={[textStyles.mediumText,{color:colors.primaryColor,paddingHorizontal:16}]}>
                   {index+1} {item?.name}
                </Text>
              <Image style={styles.image} source={item?.image}/>
            </View>
        )

    }
    return(
        <FlatList
        contentContainerStyle={{marginTop:16}}
        data={data}
        renderItem={renderTopSpots}
        keyExtractor={(item,index)=>index.toString()}
        />
    )

}
export default TopSpots
const styles=StyleSheet.create({
    container:{
        borderRadius:8,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:10
    },
    image:{
        borderRadius:8
    }

})