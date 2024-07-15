import { Image, StyleSheet, Text, View } from "react-native"
import textStyles from "../constants/textStyles"

const SearchBar=({searchText,setSearchText,...props})=>{
    return(
        <View style={styles.searchContainer}>
            <View style={styles.searchbox}>
            <Image source={require("../assets/icons/Search.png")}/>
            <Text style={[textStyles.normalText,{marginLeft:8}]}>Search</Text>
            </View>
            <Image source={require("../assets/icons/Filter.png")}/>
        </View>
    )

}
export default SearchBar
const styles=StyleSheet.create({
    searchContainer:{
        height:56,
        backgroundColor:"#F5F5F5",
        paddingHorizontal:18,
        borderRadius:12,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    searchbox:{
       flexDirection:"row"
    }
})