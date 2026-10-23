const axios = require("axios");

// ========================================
// AXIOS GET API PRACTICE
// ========================================

// BASE URLS
const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// COMMON GET FUNCTION
// ========================================

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

// FUNCTION CALL
getAllProducts();


// ========================================
// 2. GET SINGLE PRODUCT
// Response: Single object
// ========================================

async function getSingleProduct(id) {
    const data = await getData(`${DUMMY_URL}/products/${id}`);

    if (data) {
        console.log("Title:", data.title);
        console.log("Price:", data.price);
        console.log("Category:", data.category);
    }
}

// FUNCTION CALL
// getSingleProduct(1);


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
        console.log("Products:", data.products);
        console.log("Total:", data.total);
    }
}

// FUNCTION CALL
// searchProducts("phone");


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
        console.log("Products:", data.products);
        console.log("Total:", data.total);
        console.log("Skip:", data.skip);
        console.log("Limit:", data.limit);
        console.log("Current page:", page);
    }
}

// FUNCTION CALL
// getProductsByPage(2, 10);


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

// FUNCTION CALL
// getProductsByCategory("beauty");


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

// FUNCTION CALL
// getAllUsers();


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

// FUNCTION CALL
// getSingleUser(1);


// ========================================
// 8. SEARCH USERS
// Response: Object containing users array
// ========================================

async function searchUsers(name) {
    const data = await getData(
        `${DUMMY_URL}/users/search`,
        { q: name }
    );

    if (data) {
        console.log("Users:", data.users);
        console.log("Total:", data.total);
    }
}

// FUNCTION CALL
// searchUsers("John");


// ========================================
// 9. GET ALL POSTS — DUMMYJSON
// Response: Object containing posts array
// ========================================

async function getAllPosts() {
    const data = await getData(`${DUMMY_URL}/posts`);

    if (data) {
        console.log(data.posts);
    }
}

// FUNCTION CALL
// getAllPosts();


// ========================================
// 10. GET SINGLE POST — DUMMYJSON
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

// FUNCTION CALL
// getSinglePost(1);


// ========================================
// 11. GET POSTS BY USER ID — DUMMYJSON
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

// FUNCTION CALL
// getPostsByUser(1);


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

// FUNCTION CALL
// getAllTodos();


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

// FUNCTION CALL
// getTodosByUser(1);


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

// FUNCTION CALL
// getAllRecipes();


// ========================================
// 15. GET SINGLE RECIPE
// Response: Single object containing arrays
// ========================================

async function getSingleRecipe(id) {
    const data = await getData(`${DUMMY_URL}/recipes/${id}`);

    if (data) {
        console.log("Name:", data.name);
        console.log("Ingredients:", data.ingredients);
        console.log("Instructions:", data.instructions);
    }
}

// FUNCTION CALL
// getSingleRecipe(1);


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

// FUNCTION CALL
// getAllQuotes();


// ========================================
// 17. GET ALL COMMENTS — JSONPLACEHOLDER
// Response: Direct array
// ========================================

async function getAllComments() {
    const data = await getData(`${JSON_URL}/comments`);

    if (data) {
        console.log(data);
    }
}

// FUNCTION CALL
// getAllComments();


// ========================================
// 18. GET SINGLE POST — JSONPLACEHOLDER
// Response: Direct object
// ========================================

async function getJsonPost(id) {
    const data = await getData(`${JSON_URL}/posts/${id}`);

    if (data) {
        console.log("Title:", data.title);
        console.log("Body:", data.body);
    }
}

// FUNCTION CALL
// getJsonPost(1);


// ========================================
// 19. FILTER POSTS BY USER ID — JSONPLACEHOLDER
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

// FUNCTION CALL
// getJsonPostsByUser(1);


// ========================================
// 20. GET COMMENTS FOR A POST
// JSONPLACEHOLDER
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

// FUNCTION CALL
// getCommentsByPost(1);


// ========================================
// 21. GET ALBUM PHOTOS
// JSONPLACEHOLDER
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

// FUNCTION CALL
// getAlbumPhotos(1);


// ========================================
// 22. GET ALL USERS WITH ADDRESS DATA
// JSONPLACEHOLDER
// Response: Direct array of nested objects
// ========================================

async function getJsonUsers() {
    const data = await getData(`${JSON_URL}/users`);

    if (data) {
        data.forEach(user => {
            console.log("Name:", user.name);
            console.log("Email:", user.email);
            console.log("City:", user.address.city);
            console.log("Company:", user.company.name);
            console.log("----------------------------");
        });
    }
}

// FUNCTION CALL
// getJsonUsers();