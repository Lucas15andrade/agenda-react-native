import { createStackNavigator, createAppContainer } from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

const AppNavigator = createStackNavigator({
  Home: {
    //Possui a "injeção" do método navigate do react-navigation
    screen: PeoplePage,

    navigationOptions: () =>({
      title: 'Início',
      headerStyle: {
        backgroundColor: '#6ca2f7'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 25
      }
    })
  },

  Detail: {
    screen: PeopleDetailPage,

    navigationOptions: () => ({
      title: 'Detalhes',
      headerStyle: {
        backgroundColor: '#6ca2f7'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 25
      }
    })
  }
});

//export default PeoplePage

export default createAppContainer(AppNavigator);