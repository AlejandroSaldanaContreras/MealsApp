import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';




function CategoriesScreen({navigation}){

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate("MealsOverview", {categoryId: itemData.item.id});
        }
        return(
            <CategoryGridTile title={itemData.item.title} 
                                color={itemData.item.color}
                                onPress={pressHandler}></CategoryGridTile>
        );
    }
    return(
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} 
                    renderItem={renderCategoryItem}
                    numColumns={2}>

        </FlatList>
    );
}

export default CategoriesScreen;