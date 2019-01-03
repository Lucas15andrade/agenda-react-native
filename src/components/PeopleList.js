import React from 'react'
import { Text, View} from 'react-native'

//Componente stateless - Sem estado
const PeopleList = (props) => {

    // {peoples} é a 'tag' passada na chamada do componente em App.js
    const { peoples } = props;

    const textElements = peoples.map((people) =>{
        const { first } = people.name;
        return <Text key={first}>{first}</Text>
      });

    return(
        <View>
            {textElements}
        </View>
    )
}

export default PeopleList