import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import SearchBar from "../Components/SearchBar"
import colors from "../utils/colors"
import textStyles from "../constants/textStyles"
import FeaturesCourseList from "../Components/FeaturedCourses"
import SearchData from "../data/searchPage.json"
import { useState } from "react"
import Heading from "../Components/Heading"

const SearchPage=({showSearch,setShowSearch})=>{
    const tabs=[
        {
            title:"Courses",
            value:"courses"

        },
        {
            title:"Mentors",
            value:"mentors"
            
        }
    ]
    const [tabSelected,setTabSelect]=useState(tabs[0])
    const [searchValue,setSearchValue]=useState('')
    const [filterData,setFilterData]=useState(null)
   
    const Tabs=()=>{
        return(
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            {tabs.map(item=>
            <TouchableOpacity
            onPress={()=>{
                setFilterData(null)
                setSearchValue(null)
                setTabSelect(item)
            }}
             style={{backgroundColor:item?.value==tabSelected.value?colors.primary:colors.white,alignItems:"center",justifyContent:"center",padding:8,borderWidth:2,borderColor:colors.primary,gap:2,borderRadius:50,width:"48%"}}>
                <Text style={[textStyles.mediumText,{color:item?.value==tabSelected.value?colors.white:colors.primary}]}>{item?.title}</Text>
            </TouchableOpacity>)}

        </View>
        )
       
    }
    const onDataFilter=()=>{
        console.log(searchValue,"search")
        const filterData=  SearchData[tabSelected?.value].filter(item=>item?.title?.toLowerCase()?.includes(searchValue?.toLowerCase()) || item?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()))
        setFilterData(filterData)
    }
    return(
        <ScrollView>
            <Text onPress={()=>setShowSearch(false)}>Go To home</Text>
              <View style={styles.commomMargin}>
                <SearchBar  searchText={searchValue} setSearchText={(value)=>setSearchValue(value)} onFilter={()=>onDataFilter()}/>
            </View>
            <View style={styles.commomMargin}>
                <Tabs/>
            </View>
            {searchValue && filterData ?
              <View style={styles.commomMargin}>
              <Heading title={`Recent Searches for ${searchValue}`} des={filterData?.length}/>
          </View>:<>
          </>}
          
            <View style={styles.commomMargin}>
               <FeaturesCourseList list={filterData || SearchData[tabSelected?.value]}/>
            </View>

        </ScrollView>
    )

}
export default SearchPage
const styles=StyleSheet.create({
    commomMargin:{
        marginTop:24
    }
})