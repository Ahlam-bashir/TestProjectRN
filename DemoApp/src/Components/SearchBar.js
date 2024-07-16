import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import textStyles from "../constants/textStyles"

const SearchBar=({searchText,setSearchText,onClickSearch,onFilter})=>{
    return(
        <TouchableOpacity style={styles.searchContainer} onPress={onClickSearch}>
            <View style={styles.searchbox}>
            <Image source={require("../assets/icons/Search.png")}/>
            <TextInput value={searchText} style={[{marginLeft:8}]} onChangeText={(value)=>setSearchText(value)} placeholder="Search"/>
            
            </View>
            <TouchableOpacity disabled={!searchText} onPress={ onFilter}>
            <Image source={require("../assets/icons/Filter.png")} />
            </TouchableOpacity>
          
        </TouchableOpacity>
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
       flexDirection:"row",
       alignItems:"center"
    }
})