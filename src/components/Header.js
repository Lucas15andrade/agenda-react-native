import React, {Component} from 'react'
//Destructing 
import { View, Text, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    title: {
        color: '#fff',
        fontSize: 25
    }
});

/*
const container = {
    //marginTop: 25,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center'
};

const title = {
    color: '#fff',
    fontSize: 25
}
*/

const Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header;



/*

Forma sem utilizar o return

const Component = (props) => (
    <View>

    </View>
)
*/

/*

Utlizando uma classe

export default class Component extends Component{
    render (){
        return(
            <View>

            </View>
        )
    }
}
*/