import { Text, View,StyleSheet,ScrollView,Image} from "react-native"
import { windowHeight, windowWidth } from "../utils/constants"
import Highlights from "../components/HighlightsList"
import textStyles from "../utils/textStyles"
import colors from "../utils/colors"
import CategoriesList from "../components/CategoriesList"
import TravelGuideCard from "../components/TravelGuide"
import { Button } from "../components/Button"
import { highlightsData } from "../data/highlights"
import TopSpots from "../components/TopSpots"
const Surfing=({navigation,route})=>{
    let data=  highlightsData.find(item=>item.title.toLowerCase()==route.name.toLowerCase())

    return(

        <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:colors.white}}>
        <Image
        source={data.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.highlightscontainer}>
        <Text style={textStyles.normalText}>{data.description}</Text>
      </View>
      <View style={[{backgroundColor:colors.primary_light,padding:18}]}>
     <Text style={textStyles.heading}>Top Spots</Text>
     <TopSpots data={data?.top_spots}/>
     <View >
     <Text style={textStyles.heading}>Travel Guide</Text>
       <TravelGuideCard/>
     </View>
     </View>
        </ScrollView>

        <Button/>
        </View>
      
    )
    
}
export default Surfing
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00000000'
      },
      image: {
        width: windowWidth,
        height:  windowHeight/2,
      },
      highlightscontainer:{
        margin:18,
      }

})