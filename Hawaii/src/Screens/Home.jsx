import { Image, StyleSheet, Text, View ,Dimensions, ScrollView} from "react-native"
import { windowHeight, windowWidth } from "../utils/constants"
import Highlights from "../components/HighlightsList"
import textStyles from "../utils/textStyles"
import colors from "../utils/colors"
import CategoriesList from "../components/CategoriesList"
import TravelGuideCard from "../components/TravelGuide"
import { Button } from "../components/Button"

const Home=({navigation})=>{
    return(

        <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor:colors.white}}>
        <Image
        source={require('../assets/images/Head.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.highlightscontainer}>
        <Text style={textStyles.heading}>Highlights</Text>
        <Highlights navigation={navigation}/>
      </View>
      <View style={[{backgroundColor:colors.primary_light,padding:18}]}>
     <Text style={textStyles.heading}>Categories</Text>
     <CategoriesList/>
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
export default Home
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