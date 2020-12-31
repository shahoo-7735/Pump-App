import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import VendorStack from './vendorStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Vendor: {
        screen: VendorStack,
    }
});

export default createAppContainer(RootDrawerNavigator);