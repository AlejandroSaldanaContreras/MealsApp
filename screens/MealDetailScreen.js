import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, Button } from "react-native";
import { MEALS } from '../data/dummy-data';
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }){
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFav = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoriteStatus(){
       if(mealIsFav){
        favoriteMealsCtx.removeFavorite(mealId);
       } else {
        favoriteMealsCtx.addFavorite(mealId);
       }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                            icon={mealIsFav ? 'heart': 'heart-outline'}
                            color='white' 
                            onPress={changeFavoriteStatus}></IconButton>
            }
        });
    }, [navigation, changeFavoriteStatus]);
    
    return(
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}/>
            <View style={styles.listOutterContainer}>
                <View style={styles.listContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <List data={selectedMeal.ingredients} />
                    <Text style={styles.subtitle}>Steps</Text>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    subtitle:{
        fontSize: 18,
        fontWeight: 'bold', 
        marginVertical: 4,
        padding: 6,
        marginHorizontal: 12,
        textAlign: 'center',
        borderBottomColor: '#263A29',
        borderBottomWidth: 1,
        color: '#263A29'
    },
    listContainer: {
        width: '80%',
    },
    listOutterContainer:{
        alignItems: 'center',
    }
});