import PostComponent from "@/components/post-component";
import RecipeComponent from "@/components/recipe-component";

import './style.css';

const fetchRecipies = async (userId: number) => {
    const response = await fetch("https://dummyjson.com/recipes");
    if (!response.ok) {
        throw new Error("Failed to fetch recipes");
    }
    
    const recipiesData = await response.json();

    console.log("Fetched recipes data:", recipiesData.recipes);    

    const filteredRecipes = recipiesData.recipes.filter((recipe: { userId: number }) => recipe.userId === userId);

    console.log("Filtered recipes for userId", userId, ":", filteredRecipes);    

    return { ...recipiesData, recipes: filteredRecipes };
}

const fetchPosts = async (userId: number) => {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const postsData = await response.json();

    // console.log("Fetched posts data:", postsData);    

    postsData.posts = postsData.posts.filter((post: { userId: number }) => post.userId === userId);

    return postsData;
}

export default async function UserProfilePage({ params }: { params: Promise<{ userId: number }> }) {

    let { userId } = await params;

    userId = parseInt(userId.toString()); // Ensure userId is a number

    console.log("UserProfilePage component rendered for userId:", userId);
    

    const recipiesData = fetchRecipies(userId);
    const postsData = fetchPosts(userId);

    const [recipies, posts] = await Promise.all([recipiesData, postsData]);

    return (
        <div className="user-profile-container">
           <RecipeComponent recipes={recipies} />
           <PostComponent posts={posts} />
        </div>
    );
}
