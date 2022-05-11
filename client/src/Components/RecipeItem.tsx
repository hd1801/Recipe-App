import { Recipe } from "../Interface/recipe.interface";
import { useNavigate } from "react-router"
import { Card, Container, Button } from "react-bootstrap";

interface RecipeProps extends Recipe{
    key:number;
    saved:boolean;
}

export const RecipeItem = (props:RecipeProps)=>{
    const navigate = useNavigate();
    const handleSave= async ()=>{
        const url= `http://localhost:4000/recipe/save/${props.recipeId}`;
        await fetch(url,{ method:'POST' });
    }
    const showItem= ()=>{
        navigate('../info',{state:props.recipeId})
    }
return <Container className="m-3 p-3" >
        <Card className="p-3">
            <Container className="d-flex justify-content-between">
            <Card.Title>{props.title}</Card.Title> 
             <Card.Text>Cooking Time: {props.cookTime} minutes</Card.Text>
            </Container> 
         <Card.Body>
            <Container>
            {props.description}
            </Container>
         </Card.Body>
         <Container className="d-flex justify-content-evenly    ">
         { !props.saved && <Button onClick={handleSave}> Save </Button>}
         <Button onClick={showItem}> Show </Button>
         </Container>
        </Card>
    </Container> 
    
}