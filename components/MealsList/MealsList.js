import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem';

function MealsList({items}) {
    function renderMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
            id: item.id,
        }
        return(
            <MealItem {...mealItemProps}></MealItem>
        );
    }

    return (
    <View style={styles.container}>
        <FlatList data={items} 
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}/>
    </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
});