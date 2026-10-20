```javascript
const axios = require("axios");

// ========================================
// AXIOS GET API PRACTICE
// ========================================

// BASE URLS
const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// COMMON GET FUNCTION
async function getData(url, params = {}) {
    try {
        const response = await axios.get(url, { params });

        console.log("Status:", response.status);
        console.log("Data:", response.data);

        return response.data;
    } catch (error) {
        if (error.response) {
            console.log("API Error:", error.response.status);
            console.log("Message:", error.response.data);
        } else if (error.request) {
            console.log("No response received from server");
        } else {
            console.log("Error:", error.message);
        }

        return null;
    }
}


// ========================================
// 1. GET ALL PRODUCTS
// Response: Object containing products array
// ========================================
async function getAllProducts() {
    const data = await getData(`${DUMMY_URL}/products`);

    if (data) {
        console.log(data.products);
    }
}


// ========================================
// 2. GET SINGLE PRODUCT
// Response: Single object
// ========================================
async function getSingleProduct(id) {
    const data = await getData(`${DUMMY_URL}/products/${id}`);

    if (data) {
        console.log(data.title);
        console.log(data.price);
        console.log(data.category);
    }
}


// ========================================
// 3. SEARCH PRODUCTS
// Response: Object containing products array
// ========================================
async function searchProducts(searchText) {
    const data = await getData(
        `${DUMMY_URL}/products/search`,
        { q: searchText }
    );

    if (data) {
        console.log(data.products);
        console.log("Total:", data.total);
    }
}


// ========================================
// 4. PAGINATION
// Response: Products + total + skip + limit
// ========================================
async function getProductsByPage(page, limit) {
    const skip = (page - 1) * limit;

    const data = await getData(`${DUMMY_URL}/products`, {
        limit,
        skip
    });

    if (data) {
        console.log(data.products);
        console.log("Total:", data.total);
        console.log("Current page:", page);
    }
}


// ========================================
// 5. GET PRODUCTS BY CATEGORY
// Response: Object containing products array
// ========================================
async function getProductsByCategory(category) {
    const data = await getData(
        `${DUMMY_URL}/products/category/${category}`
    );

    if (data) {
        console.log(data.products);
    }
}


// ========================================
// 6. GET ALL USERS
// Response: Object containing users array
// ========================================
async function getAllUsers() {
    const data = await getData(`${DUMMY_URL}/users`);

    if (data) {
        console.log(data.users);
    }
}


// ========================================
// 7. GET SINGLE USER
// Response: Single object with nested objects
// ========================================
async function getSingleUser(id) {
    const data = await getData(`${DUMMY_URL}/users/${id}`);

    if (data) {
        console.log("Name:", data.firstName, data.lastName);
        console.log("Email:", data.email);
        console.log("City:", data.address.city);
        console.log("Coordinates:", data.address.coordinates);
    }
}


// ========================================
// 8. SEARCH USERS
// Response: Object containing users array
// ========================================
async function searchUsers(name) {
    const data = await getData(`${DUMMY_URL}/users/search`, {
        q: name
    });

    if (data) {
        console.log(data.users);
        console.log("Total:", data.total);
    }
}


// ========================================
// 9. GET ALL POSTS
// Response: Object containing posts array
// ========================================
async function getAllPosts() {
    const data = await getData(`${DUMMY_URL}/posts`);

    if (data) {
        console.log(data.posts);
    }
}


// ========================================
// 10. GET SINGLE POST
// Response: Single object
// ========================================
async function getSinglePost(id) {
    const data = await getData(`${DUMMY_URL}/posts/${id}`);

    if (data) {
        console.log("Title:", data.title);
        console.log("Body:", data.body);
        console.log("Tags:", data.tags);
    }
}


// ========================================
// 11. GET POSTS BY USER ID
// Response: Object containing posts array
// ========================================
async function getPostsByUser(userId) {
    const data = await getData(
        `${DUMMY_URL}/posts/user/${userId}`
    );

    if (data) {
        console.log(data.posts);
    }
}


// ========================================
// 12. GET ALL TODOS
// Response: Object containing todos array
// ========================================
async function getAllTodos() {
    const data = await getData(`${DUMMY_URL}/todos`);

    if (data) {
        console.log(data.todos);
    }
}


// ========================================
// 13. GET TODOS BY USER ID
// Response: Object containing todos array
// ========================================
async function getTodosByUser(userId) {
    const data = await getData(
        `${DUMMY_URL}/todos/user/${userId}`
    );

    if (data) {
        console.log(data.todos);
    }
}


// ========================================
// 14. GET ALL RECIPES
// Response: Object containing recipes array
// ========================================
async function getAllRecipes() {
    const data = await getData(`${DUMMY_URL}/recipes`);

    if (data) {
        console.log(data.recipes);
    }
}


// ========================================
// 15. GET SINGLE RECIPE
// Response: Single object with arrays
// ========================================
async function getSingleRecipe(id) {
    const data = await getData(`${DUMMY_URL}/recipes/${id}`);

    if (data) {
        console.log("Name:", data.name);
        console.log("Ingredients:", data.ingredients);
        console.log("Instructions:", data.instructions);
    }
}


// ========================================
// 16. GET ALL QUOTES
// Response: Object containing quotes array
// ========================================
async function getAllQuotes() {
    const data = await getData(`${DUMMY_URL}/quotes`);

    if (data) {
        console.log(data.quotes);
    }
}


// ========================================
// 17. GET ALL COMMENTS
// JSONPlaceholder
// Response: Direct array
// ========================================
async function getAllComments() {
    const data = await getData(`${JSON_URL}/comments`);

    if (data) {
        console.log(data);
    }
}


// ========================================
// 18. GET SINGLE POST
// JSONPlaceholder
// Response: Direct object
// ========================================
async function getJsonPost(id) {
    const data = await getData(`${JSON_URL}/posts/${id}`);

    if (data) {
        console.log(data.title);
        console.log(data.body);
    }
}


// ========================================
// 19. FILTER POSTS BY USER
// JSONPlaceholder
// Response: Direct array
// ========================================
async function getJsonPostsByUser(userId) {
    const data = await getData(`${JSON_URL}/posts`, {
        userId
    });

    if (data) {
        console.log(data);
    }
}


// ========================================
// 20. GET NESTED COMMENTS FOR A POST
// JSONPlaceholder
// Response: Direct array
// ========================================
async function getCommentsByPost(postId) {
    const data = await getData(
        `${JSON_URL}/posts/${postId}/comments`
    );

    if (data) {
        console.log(data);
    }
}


// ========================================
// 21. GET ALBUM PHOTOS
// JSONPlaceholder
// Response: Direct array
// ========================================
async function getAlbumPhotos(albumId) {
    const data = await getData(
        `${JSON_URL}/albums/${albumId}/photos`
    );

    if (data) {
        console.log(data);
    }
}


// ========================================
// 22. GET ALL USERS WITH ADDRESS DATA
// JSONPlaceholder
// Response: Direct array of nested objects
// ========================================
async function getJsonUsers() {
    const data = await getData(`${JSON_URL}/users`);

    if (data) {
        data.forEach(user => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("City:", user.address.city);
            console.log("------------------");
        });
    }
}


// ========================================
// PRACTICE: CALL ONE FUNCTION AT A TIME
// ========================================

// Uncomment ONE line to test:

// getAllProducts();
// getSingleProduct(1);
// searchProducts("phone");
// getProductsByPage(2, 10);
// getProductsByCategory("beauty");

// getAllUsers();
// getSingleUser(1);
// searchUsers("John");

// getAllPosts();
// getSinglePost(1);
// getPostsByUser(1);

// getAllTodos();
// getTodosByUser(1);

// getAllRecipes();
// getSingleRecipe(1);
// getAllQuotes();

// getAllComments();
// getJsonPost(1);
// getJsonPostsByUser(1);
// getCommentsByPost(1);
// getAlbumPhotos(1);
// getJsonUsers();
```