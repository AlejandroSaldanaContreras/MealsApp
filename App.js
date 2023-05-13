import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';


const Stack = createNativeStackNavigator();
const  BottomTab = createMaterialBottomTabNavigator();

function BottomNavigator(){
  return(
    <BottomTab.Navigator>
      <BottomTab.Screen name="Categories" component={CategoriesScreen} 
                        options={{
                          tabBarIcon: ({color, size}) => <Ionicons name="restaurant-outline" color={color} size={size} />
                        }}
      />
      <BottomTab.Screen name="Favourites" component={FavouritesScreen}
                        options={{
                          tabBarIcon: ({color, size}) => <Ionicons name="heart-outline" color={color} size={size} />
                        }}
      />
    </BottomTab.Navigator>
  );
}


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
          <Stack.Screen name="BottomTabs" component={BottomNavigator} 
                        options={{
                          title: 'All Categories',
                          headerShown: true
                        }}
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetail" component={MealDetailScreen} 
                        options={{
                          title: 'About the meal',
                        }}
          />
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
