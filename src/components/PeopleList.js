import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'

//Componente stateless - Sem estado
const PeopleList = (props) => {

    // {peoples} é a 'tag' passada na chamada do componente em App.js
    const { peoples } = props;

    const items = peoples.map((people) => {
        return <PeopleListItem 
            key={people.name.first} 
            people={people}/>
    });

    return(
        <View style={styles.containter}>
            {items}
        </View>
    )
}

const styles = StyleSheet.create({
    containter:{
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList