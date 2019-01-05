/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 //Fazendo destructing js na importação dos components do React
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import Header from '../components/Header'
 import axios from 'axios'
 import PeopleList from '../components/PeopleList';
 //import { CreateStackNavigator} from 'react-navigation'
 
 export default class PeoplePage extends Component{
 
   /*
   static navigationOptions = {
     title: 'Início'
   }
   */
 
   constructor(props){
     super(props);
 
     this.state = {
       peoples: []
     }
   }
   componentDidMount() {
 
     /*
     async function getUsers(){
       try {
         const response = await axios.get('https://randomuser.me/api/?nat=br&results=5');
         
       } catch (error) {
         console.log('Erro! :/');
       }
       //return response;
     }
     
     const resultados = getUsers();
     this.setState({
       peoples: resultados.data
     })
     */
     /*
 
     const getUsersTest = async () =>{
       return await axios.get('https://randomuser.me/api/?nat=br&results=5');
     }
     
     const result = getUsersTest();
     this.setState({
       peoples: result.data
     })
     */
 
     //console.log(result);
     
 
     
     axios.get('https://randomuser.me/api/?nat=br&results=5').then(
       response => {
         const { results } = response.data;
         console.log(results);
         this.setState({
           peoples: results
         })
       }
     )
     
 
   }
 
   render() {
     return (
       <View>
         <Header title='Pessoas'/>
         <PeopleList peoples={this.state.peoples}/>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
  
 });
 