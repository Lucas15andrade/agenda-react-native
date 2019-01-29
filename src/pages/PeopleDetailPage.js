import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {CapitalizeFirstLetter} from '../util'
import Line from '../components/Line'

export default class PeoplePageDetailPage extends Component{

    static navigationOptions = ({ navigation }) => {

        const peopleName = CapitalizeFirstLetter(navigation.state.params.people.name.first);

        return({
            title: peopleName,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#6ca2f7'
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 25
            }
          })
    }

    render(){

        const { people } = this.props.navigation.state.params;

        return(
            <View style={styles.container}>
                <ScrollView >
                    <Image source={{uri: people.picture.large}} 
                        style={styles.avatar}/>

                    <View style={styles.detailContainer}>
                        <Line label="Email:" content={people.email}/>
                        <Line label="Cidade:" content={people.location.city}/>
                        <Line label="Estado:" content={people.location.state}/>
                        <Line label="Tel::" content={people.phone}/>
                        <Line label="Cel:" content={people.cell}/>
                        <Line label="Cidade:" content={people.location.city}/>
                        <Line label="Nacionalidade:" content={people.nat}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

//export default PeoplePageDetailPage

const styles = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        //width: 300,
        //borderRadius: 100
    },
    container: {
        padding: 15
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    }
});