 //Fazendo destructing js na importação dos components do React
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
 //import Header from '../components/Header'
 import axios from 'axios'
 import PeopleList from '../components/PeopleList';
 
 export default class PeoplePage extends Component{
 
   constructor(props){
     super(props);
 
     this.state = {
       peoples: [],
       loading: false,
       error: false
     }
   }
   componentDidMount() {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      axios.get('https://randomuser.me/api/?nat=br&results=150').then(
        response => {
          const { results } = response.data;
          //console.log(results);
          this.setState({
            peoples: results,
            loading: false
          })
        }
      ).catch((error) => {
        this.setState({
          error: true,
          loading: false
        });
      });
    }, 1500);
    
   }

   /*
   navigate(){
     this.props.navigation.navigate('Detail',)
   }
   */

   /* Utilizando um método para verifica o valor de loading do state
      Ou verficar atráves de um operador ternário */

   renderPage(){
      if(this.state.loading)
        return <ActivityIndicator size="large" color="6ca2f7"/>;
      
      if(this.state.error)
        return <Text style={styles.error}>Ops... Algo deu errado! :(</Text>

      return (<PeopleList peoples={this.state.peoples}
                          onPressItem={(pageParams) => this.props.navigation.navigate('Detail', pageParams)}
                      />
                );
   }
 
   render() {
     return (
       <View style={styles.container}>
         { this.renderPage() }
         { /*
           this.state.loading 
              ? <ActivityIndicator size="large" color="6ca2f7"/>
              : this.state.error
                  ? <Text style={styles.error}>Ops... Algo deu errado! :(</Text>
                    : <PeopleList 
                        peoples={this.state.peoples}
                        onPressItem={(pageParams) => this.props.navigation.navigate('Detail', pageParams)}
                      />
                  */}
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    error: {
      color: 'red',
      alignSelf: 'center'
    }
 });
 