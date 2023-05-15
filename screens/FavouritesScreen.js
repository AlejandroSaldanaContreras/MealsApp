import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data"; 
import { StyleSheet, Text, View } from "react-native";
function FavouritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    if(favoriteMeals.length === 0){
        return(
            <View style={styles.rootContainer}>
                <Text style={styles.text}>No favorite meals yet.</Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} />
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});