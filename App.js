import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ApiScreen from './src/screens/ApiScreen';

const navigator = createStackNavigator(
  {
    Api: ApiScreen,
  },
  {
    initialRouteName: 'Api',
    defaultNavigationOptions: {
      title: 'Axios API'
    }
  }
);

export default createAppContainer(navigator);
