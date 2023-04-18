import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                              title: 'All Categories', 
                              headerStyle: {backgroundColor: "#41644A"},
                              headerTintColor: 'white',
                              contentStyle: {backgroundColor: '#F2E3DB'}
                          }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
