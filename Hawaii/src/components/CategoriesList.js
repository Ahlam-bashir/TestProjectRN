import { FlatList, Image, StyleSheet, View ,Text} from "react-native"
import { categories } from "../data/highlights"
import colors from "../utils/colors"
import textStyles from "../utils/textStyles"

const CategoriesList=()=>{
    const catgoriesList=({item})=>{
        return(
            <View style={styles.container}>
                <Text style={textStyles.mediumText}>
                    {item}
                </Text>
              <Image source={require("../assets/images/forward.png")}/>
            </View>
        )

    }
    return(
        <FlatList
        contentContainerStyle={{marginTop:16}}
        data={categories}
        renderItem={catgoriesList}
        keyExtractor={(item,index)=>index.toString()}
        />
    )

}
export default CategoriesList
const styles=StyleSheet.create({
    container:{
        borderRadius:8,
        backgroundColor:colors.white,
        alignItems:"center",
        justifyContent:"space-between",
        padding:16,
        flexDirection:"row",
        marginBottom:10
    }
})