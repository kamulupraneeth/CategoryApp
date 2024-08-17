import { Text, TouchableOpacity,View,FlatList, StyleSheet } from "react-native";
import Header from "./Header/Header";
import categories from '../constants/Categories.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useState } from "react";
import WorkerProfile from "./WorkerProfile";

const workerData = require('../constants/WorkerProfiles.json');

const CategoriesScreen = () => {
    const [filteredWorkers, setFilteredWorkers] = useState([]);
    const [category, setCategory] = useState('Astrologer');
    const [searchText, setSearchText] = useState('');

    const handleCategoryPress = (role) => {
        setCategory(role);
        filterWorkers(searchText); // Re-filter workers when category changes
    };

    const filterWorkers = (text) => {
        setSearchText(text);
        const filtered = (workerData[category] || []).filter(worker =>
            worker.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredWorkers(filtered);
    };

    useEffect(() => {
        setFilteredWorkers(workerData[category] || []);
    }, [category]);
    return(
        <View style={{backgroundColor:'#fff',flex:1}}>
            <View style={styles.categoryContainer}>
                {categories.map(category=>(
                    <TouchableOpacity key={category.id} onPress={()=>handleCategoryPress(category.Worker_role)} style={[
                        styles.categoryButton,
                        category.Worker_role === category && styles.borderLine
                    ]}>
                        <Icon name={category.icon} size={30} color='#000'/>
                        <Text style={{color:'#000'}}>{category.Worker_role}</Text>
                    </TouchableOpacity>
                ))}
                
            </View>
            <Header onSearch={filterWorkers} />
            <FlatList 
                data={filteredWorkers}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=><WorkerProfile profile={item}/>}
                numColumns={4}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#f2ede7',
        padding:10
    },
    borderLine: {
        borderColor: 'blue',
        borderWidth: 2, 
        borderRadius: 10,
        padding: 5,
    },
    categoryButton: {
        alignItems: 'center',
    },
})

export default CategoriesScreen;