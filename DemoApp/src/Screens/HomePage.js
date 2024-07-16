import { ScrollView, StyleSheet, View } from "react-native"
import Header from "../Components/Header"
import HomePageData from "../data/homePage.json"
import SearchBar from "../Components/SearchBar"
import TodaysList from "../Components/TodaysList"
import Heading from "../Components/Heading"
import CourseCatgory from "../Components/CourseCategoryList"
import FeaturesCourseList from "../Components/FeaturedCourses"

const HomePage=({showSearch,setShowSearch})=>{
    return(
        <ScrollView>
            <Header data={HomePageData.user}/>
            <View style={styles.commomMargin}>
                <SearchBar onClickSearch={()=>setShowSearch(true)}/>
            </View>
            <View style={styles.commomMargin}>
               <TodaysList data={HomePageData?.today_special}/>
            </View>
            <View style={styles.commomMargin}>
               <Heading title={"Course Category"}/>
            </View>
            <View style={styles.commomMargin}>
               <CourseCatgory courseData={HomePageData.categories}/>
            </View>
            <View style={styles.commomMargin}>
               <Heading title={"Featured Courses"}/>
            </View>
            <View style={styles.commomMargin}>
             <FeaturesCourseList list={HomePageData.featured_courses} horizontal={true}/>
            </View>
            <View style={styles.commomMargin}>
               <Heading title={"Most Popular Courses"}/>
            </View>
            <View style={styles.commomMargin}>
             <FeaturesCourseList list={HomePageData.most_popular_courses} horizontal={false}/>
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