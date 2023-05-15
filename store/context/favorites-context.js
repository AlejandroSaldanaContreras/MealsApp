import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}){
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    function addFavorites(id) {
        setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorites(id){
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorites,
        removeFavorite: removeFavorites,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;