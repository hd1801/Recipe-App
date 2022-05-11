import useFetch from "../Hooks/useFetch";
import {RecipeItem} from "./RecipeItem"

export const Saved = ()=>{
    const url = "http://localhost:4000/recipe/saved"
    const recipies:any = useFetch(url);
    const renderSavedRecipe = (recipe:any)=>{

           return recipe.map((item:any)=>{
                return <RecipeItem key={item.recipe.recipeId} {...item.recipe} saved/>
            })
    }
    console.log(recipies);
    return <>
    {!recipies.loading && renderSavedRecipe(recipies.items)}
    </>

}