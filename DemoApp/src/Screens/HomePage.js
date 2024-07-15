import { ScrollView, StyleSheet, View } from "react-native"
import Header from "../Components/Header"
import HomePageData from "../data/homePage.json"
import SearchBar from "../Components/SearchBar"
import TodaysList from "../Components/TodaysList"
import Heading from "../Components/Heading"
import CourseCatgory from "../Components/CourseCategoryList"

const HomePage=()=>{
    return(
        <ScrollView>
            <Header data={HomePageData.user}/>
            <View style={styles.commomMargin}>
                <SearchBar/>
            </View>
            <View style={styles.commomMargin}>
               <TodaysList/>
            </View>
            <View style={styles.commomMargin}>
               <Heading title={"Course Category"}/>
            </View>
            <View style={styles.commomMargin}>
               <CourseCatgory courseData={HomePageData.categories}/>
            </View>

        </ScrollView>
    )

}
export default HomePage
const styles=StyleSheet.create({
    commomMargin:{
        marginTop:24
    }
})