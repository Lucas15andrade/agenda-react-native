import { createStackNavigator, createAppContainer } from 'react-navigation'
import PeoplePage from './src/pages/PeoplePage'

const AppNavigator = createStackNavigator({
  Home: {
    screen: PeoplePage
  }
});

//export default PeoplePage

export default createAppContainer(AppNavigator);