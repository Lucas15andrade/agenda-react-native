import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { CapitalizeFirstLetter } from '../util/'

const PeopleListItem = (props) => {
    const { people, navigateToDetail } = props;
    //const people = props.people;
    const { title, first, last } = people.name;

    //Template String: ` qualquer coisa ${variavel ou expressao js}`

    return(
        <TouchableOpacity onPress={() => 
            //console.log('Clicou! Nome: ' + first)
            /* 
                people: people -> {people}
            */
            navigateToDetail({people})
            }>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}}/>
                <Text style={styles.lineText}>
                    { `${CapitalizeFirstLetter(title)} ${
                        CapitalizeFirstLetter(first)} ${
                            CapitalizeFirstLetter(last)}` }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        //justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        flex: 6,
        fontSize: 23,
        paddingLeft: 15
    },
    avatar: {
        aspectRatio: 1,
        //width: 10,
        flex: 1,
        marginLeft: 10,
        //Testar com outros valores
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2
    }
});

export default PeopleListItem;