
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import ScanScreen from './ScanScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser, faHome, faQrcode } from '@fortawesome/free-solid-svg-icons';



const MyTabs = ({Tab}) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({ color, size }) => (
					<FontAwesomeIcon icon={faHome} color={color} size={size} />
				)
			}} />
			<Tab.Screen name="Scan" component={ScanScreen} options={{
				tabBarIcon: ({ color, size }) => (
					<FontAwesomeIcon icon={faQrcode} color={color} size={size} />
				)

			}} />
			<Tab.Screen name="Account" component={AccountScreen} options={{
				tabBarIcon: ({ color, size }) => (
					<FontAwesomeIcon icon={faCircleUser} color={color} size={size} />
				)

			}} />



		</Tab.Navigator>
	);
}


export default MyTabs;