import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { CapitalizeFirstLetter } from '../util/'

const PeopleListItem = (props) => {
    const { people } = props;
    //const people = props.people;
    const { title, first, last } = people.name;

    

    //Template String: ` qualquer coisa ${variavel ou expressao js}`

    return(
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { `${CapitalizeFirstLetter(title)} ${
                    CapitalizeFirstLetter(first)} ${
                        CapitalizeFirstLetter(last)}` }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        justifyContent: 'flex-start',
        //alignItems: 'flex-end'
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15
    }
});

export default PeopleListItem;