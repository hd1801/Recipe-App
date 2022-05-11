import { useLocation } from "react-router"
import useFetch from "../Hooks/useFetch";

export const Info = ()=>{
    const recipeId:any = useLocation().state;
    const URL =`http://localhost:4000/recipe/${recipeId}`
    const details  = useFetch(URL);
    console.log(details.items);
    return <>
    s
    </>
}