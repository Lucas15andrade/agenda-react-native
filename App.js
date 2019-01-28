import { createStackNavigator, createAppContainer, StyleSheet } from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

const AppNavigator = createStackNavigator({
  Home: {
    //Possui a "injeção" do método navigate do react-navigation
    screen: PeoplePage,
    
    navigationOptions: ({ navigation }) => {

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
    
    // É possível alterar o navigationOptions por aqui ou
    // sobrescrevendo esse método estático na classe do componente
    // que se deseja alterar as configurações.
    // Ambas as formas funcionam aparentemente iguais.

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
    */
  }
});


//export default PeoplePage

export default createAppContainer(AppNavigator);