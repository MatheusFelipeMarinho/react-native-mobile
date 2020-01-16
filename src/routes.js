import {createAppContainer} from 'react-navigation';
import {createStackNavigation} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigation({
        Main,
        Profile,
    })
);

export default Routes;