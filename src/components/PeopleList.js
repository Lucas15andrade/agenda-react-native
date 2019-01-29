import React from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList} from 'react-native'
import PeopleListItem from './PeopleListItem'

//Componente stateless - Sem estado
const PeopleList = (props) => {

    // {peoples} é a 'tag' passada na chamada do componente em App.js
    const { peoples, onPressItem } = props;

    /*
    const items = peoples.map((people) => {
        return <PeopleListItem 
            key={people.name.first} 
            people={people}
            navigateToDetail={onPressItem}/>
    });
    */

    return(
        <FlatList
            style={styles.containter} 
            data={peoples} 
            renderItem={ ({ item }) =>  (
                    <PeopleListItem 
                        people={item}
                        navigateToDetail={onPressItem}
                    /> 
            )} 
            keyExtractor={(item) => item.name.first}
                    
        />
    )
}

const styles = StyleSheet.create({
    containter:{
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList