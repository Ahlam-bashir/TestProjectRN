import { Image, StyleSheet, View } from "react-native"
import colors from "../utils/colors"

const TodaysList=()=>{
    return(
        <View style={style.Todaycontainer}>
         <Image source={require("../assets/Todays.png")}/>
         <View style={style.dotContainer}>
         {[1,2,3,4,5].map(item=><View style={style.dots}/>)}
         </View>
        </View>
    )
}
export default TodaysList
const style=StyleSheet.create({
    Todaycontainer:{
        backgroundColor:colors.primary,
        borderRadius:20
    },
    dots:{
        height:6,
        width:6,
        backgroundColor:colors.white,
        borderRadius:100,
        margin:3
    },
    dotContainer:{
        position:"absolute",
        flexDirection:"row",
        alignSelf:"center",
        marginTop:160
    }


})