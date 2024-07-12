import { Image, View } from 'react-native';
import { SvgUri  } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import ScanScreen from './ScanScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

const iconrender = ({color, size, focused, activeColor, path}) => {
	return (
		<View style={{ backgroundColor: focused ? "#D0EDFB" : null, padding: 10, borderRadius: 11 }}>
			<Image source={path} style={{ width: size, height: size, tintColor: color }}/>
		</View>
	)
}

const MyTabs = () => {
	return (
		<Tab.Navigator  screenOptions={{
			headerShown: false,
			tabBarStyle: {
				borderTopLeftRadius: 40,
				borderTopRightRadius: 40,
				height: 70,
			},
			tabBarLabelStyle: {
				display: 'none'
			},
			tabBarBadgeStyle: {
				backgroundColor: '#000',
				padding: 10,
			}
		}}>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({ color, size, focused }) => (
					iconrender({color, size, focused, path: require('../../assets/home.svg')})
				)
			}} />
			<Tab.Screen name="Nofication" component={ScanScreen} options={{
				tabBarIcon: ({ color, size, focused }) => (
					iconrender({color, size, focused, path: require('../../assets/bell.svg')})

				),
				tabBarStyle: { display: 'none' }
			}} />
			<Tab.Screen name="Scan" component={ScanScreen} options={{
				tabBarIcon: ({ color, size, focused }) => (
					iconrender({color, size, focused, path: require('../../assets/scan.svg')})

				),
				tabBarStyle: { display: 'none' }
			}} />
			<Tab.Screen name="History" component={ScanScreen} options={{
				tabBarIcon: ({ color, size, focused }) => (
					iconrender({color, size, focused, path: require('../../assets/history.svg')})

				),
				tabBarStyle: { display: 'none' }
			}} />
			<Tab.Screen name="Pay" component={ScanScreen} options={{
				tabBarIcon: ({ color, size, focused }) => (
					iconrender({color, size, focused, path: require('../../assets/shop.svg')})

				),
				tabBarStyle: { display: 'none' }
			}} />
			{/* <Tab.Screen name="Account" component={AccountScreen} options={{
				tabBarIcon: ({ color, size }) => (
					<FontAwesomeIcon icon={faCircleUser} color={color} size={size} />
				)

			}} /> */}



		</Tab.Navigator>
	);
}





export default MyTabs;