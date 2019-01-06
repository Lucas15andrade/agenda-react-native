import { createStackNavigator, createAppContainer, StyleSheet } from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

const AppNavigator = createStackNavigator({
  Home: {
    //Possui a "injeção" do método navigate do react-navigation
    screen: PeoplePage,
    /*
    navigationOptions: ({ navigation }) =>({

      title: 'Início',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6ca2f7'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 25
      }
      
    })
    */

    navigationOptions: ({ navigation }) => {

      //const teste = navigation.state.params.people.name.first;
      //const firstName = 'Página inicial!'

      return({
        title: 'Pessoas',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#6ca2f7'
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 25
        }
      });
    }
  },

  Detail: {
    screen: PeopleDetailPage,

    /*
    navigationOptions: () => ({
      title: 'Detalhes',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6ca2f7'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 25
      }
    })
    */

    navigationOptions: ({ navigation }) => {

      const peopleName = navigation.state.params.people.name.first;

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

  }
});

/*
const styles = StyleSheet.create({

  stackNavigator: {
    title: 'Início',
    headerStyle: {
      backgroundColor: '#6ca2f7'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 25
    }
  }

})
*/

//export default PeoplePage

export default createAppContainer(AppNavigator);