import useFetch from "../Hooks/useFetch";
import { Recipe } from "../Interface/recipe.interface";
import {RecipeItem} from "./RecipeItem"
export const Home = ()=>{
    const url = "http://localhost:4000/recipe"
    const recipies:any = useFetch(url);
    const rendeRecipe = (recipe:Recipe[])=>{
           return recipe.map((item)=>{
                return <RecipeItem key={item.recipeId} saved={false} {...item}/>
            })
    }
    console.log(recipies);
    return <>
    {!recipies.loading && rendeRecipe(recipies.items)}
    </>

}