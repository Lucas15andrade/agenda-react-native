 //Fazendo destructing js na importação dos components do React
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 //import Header from '../components/Header'
 import axios from 'axios'
 import PeopleList from '../components/PeopleList';
 
 export default class PeoplePage extends Component{
 
   constructor(props){
     super(props);
 
     this.state = {
       peoples: []
     }
   }
   componentDidMount() {
     axios.get('https://randomuser.me/api/?nat=br&results=5').then(
       response => {
         const { results } = response.data;
         //console.log(results);
         this.setState({
           peoples: results
         })
       }
     )
   }

   /*
   navigate(){
     this.props.navigation.navigate('Detail',)
   }
   */
 
   render() {
     return (
       <View>
         <PeopleList 
          peoples={this.state.peoples}
          onPressItem={(pageParams) => this.props.navigation.navigate('Detail', pageParams)}/>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
  
 });
 