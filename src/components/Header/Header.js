import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
        onSearch(text);
    };

    // const renderCarouselItem = ({ item }) => (
    //     <View style={styles.carouselItem}>
    //         {/* <Icon name={item.icon} size={40} color='#000' /> */}
    //         <Text style={styles.carouselText}>{item.Worker_role}</Text>
    //     </View>
    // );

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchText}
                onChangeText={handleSearchChange}
            />
            {/* <Carousel
                data={categories}
                renderItem={renderCarouselItem}
                sliderWidth={400}
                itemWidth={120}
                loop
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#f2f2f2',
    },
    carouselItem: {
        alignItems: 'center',
    },
    carouselText: {
        marginTop: 5,
    },
});

export default Header;
