"use client";

type Recipe = {
    id: number;
    name: string;
    cuisine: string;
}

type Recipes = {
    limit: number;
    skip: number;
    recipes: Array<Recipe>;
    total: number;
}

export default function RecipeComponent({ recipes }: { recipes: Recipes }) {
    return (
        <div className="recipe-card-container">
            <h2>Recipes</h2>
            {recipes.recipes.map((recipe: Recipe) => (
                <div key={recipe.id} className="recipe-card">
                    <h2>{recipe.name}</h2>
                    <p>Cuisine: {recipe.cuisine}</p>
                </div>
            ))}
        </div>
    );
}
