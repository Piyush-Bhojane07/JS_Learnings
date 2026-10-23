const axios = require("axios");

// ========================================
// BASE URLS
// ========================================

const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// 1. GET ALL PRODUCTS
// ========================================

async function getAllProducts() {
  try {
    const response = await axios.get(`${DUMMY_URL}/products`);

    console.log("Status:", response.status);
    console.log("Products:", response.data.products);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getAllProducts();

// ========================================
// 2. GET SINGLE PRODUCT
// ========================================

async function getSingleProduct(id) {
  try {
    const response = await axios.get(`${DUMMY_URL}/products/${id}`);

    console.log("Title:", response.data.title);
    console.log("Price:", response.data.price);
    console.log("Category:", response.data.category);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getSingleProduct(1);

// ========================================
// 3. SEARCH PRODUCTS
// ========================================

async function searchProducts(searchText) {
  try {
    const response = await axios.get(`${DUMMY_URL}/products/search`, {
      params: {
        q: searchText,
      },
    });

    console.log("Products:", response.data.products);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// searchProducts("phone");

// ========================================
// 4. PAGINATION
// ========================================

async function getProductsByPage(page, limit) {
  try {
    const skip = (page - 1) * limit;

    const response = await axios.get(`${DUMMY_URL}/products`, {
      params: {
        limit: limit,
        skip: skip,
      },
    });

    console.log("Products:", response.data.products);
    console.log("Total:", response.data.total);
    console.log("Skip:", response.data.skip);
    console.log("Limit:", response.data.limit);
    console.log("Page:", page);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getProductsByPage(2, 10);

// ========================================
// 5. GET PRODUCTS BY CATEGORY
// ========================================

async function getProductsByCategory(category) {
  try {
    const response = await axios.get(
      `${DUMMY_URL}/products/category/${category}`,
    );

    console.log("Products:", response.data.products);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getProductsByCategory("beauty");

// ========================================
// 6. GET ALL USERS — DUMMYJSON
// ========================================

async function getAllUsers() {
  try {
    const response = await axios.get(`${DUMMY_URL}/users`);

    console.log("Users:", response.data.users);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllUsers();

// ========================================
// 7. GET SINGLE USER — DUMMYJSON
// ========================================

async function getSingleUser(id) {
  try {
    const response = await axios.get(`${DUMMY_URL}/users/${id}`);

    const user = response.data;

    console.log("Name:", user.firstName, user.lastName);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
    console.log("Coordinates:", user.address.coordinates);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getSingleUser(1);

// ========================================
// 8. SEARCH USERS
// ========================================

async function searchUsers(name) {
  try {
    const response = await axios.get(`${DUMMY_URL}/users/search`, {
      params: {
        q: name,
      },
    });

    console.log("Users:", response.data.users);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// searchUsers("John");

// ========================================
// 9. GET ALL POSTS — DUMMYJSON
// ========================================

async function getAllPosts() {
  try {
    const response = await axios.get(`${DUMMY_URL}/posts`);

    console.log("Posts:", response.data.posts);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllPosts();

// ========================================
// 10. GET SINGLE POST — DUMMYJSON
// ========================================

async function getSinglePost(id) {
  try {
    const response = await axios.get(`${DUMMY_URL}/posts/${id}`);

    console.log("Title:", response.data.title);
    console.log("Body:", response.data.body);
    console.log("Tags:", response.data.tags);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getSinglePost(1);

// ========================================
// 11. GET POSTS BY USER ID — DUMMYJSON
// ========================================

async function getPostsByUser(userId) {
  try {
    const response = await axios.get(`${DUMMY_URL}/posts/user/${userId}`);

    console.log("Posts:", response.data.posts);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getPostsByUser(1);

// ========================================
// 12. GET ALL TODOS
// ========================================

async function getAllTodos() {
  try {
    const response = await axios.get(`${DUMMY_URL}/todos`);

    console.log("Todos:", response.data.todos);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllTodos();

// ========================================
// 13. GET TODOS BY USER ID
// ========================================

async function getTodosByUser(userId) {
  try {
    const response = await axios.get(`${DUMMY_URL}/todos/user/${userId}`);

    console.log("Todos:", response.data.todos);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getTodosByUser(1);

// ========================================
// 14. GET ALL RECIPES
// ========================================

async function getAllRecipes() {
  try {
    const response = await axios.get(`${DUMMY_URL}/recipes`);

    console.log("Recipes:", response.data.recipes);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllRecipes();

// ========================================
// 15. GET SINGLE RECIPE
// ========================================

async function getSingleRecipe(id) {
  try {
    const response = await axios.get(`${DUMMY_URL}/recipes/${id}`);

    console.log("Name:", response.data.name);
    console.log("Ingredients:", response.data.ingredients);
    console.log("Instructions:", response.data.instructions);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getSingleRecipe(1);

// ========================================
// 16. GET ALL QUOTES
// ========================================

async function getAllQuotes() {
  try {
    const response = await axios.get(`${DUMMY_URL}/quotes`);

    console.log("Quotes:", response.data.quotes);
    console.log("Total:", response.data.total);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllQuotes();

// ========================================
// 17. GET ALL COMMENTS — JSONPLACEHOLDER
// ========================================

async function getAllComments() {
  try {
    const response = await axios.get(`${JSON_URL}/comments`);

    console.log("Comments:", response.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAllComments();

// ========================================
// 18. GET SINGLE POST — JSONPLACEHOLDER
// ========================================

async function getJsonPost(id) {
  try {
    const response = await axios.get(`${JSON_URL}/posts/${id}`);

    console.log("Title:", response.data.title);
    console.log("Body:", response.data.body);
    console.log("User ID:", response.data.userId);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getJsonPost(1);

// ========================================
// 19. FILTER POSTS BY USER ID — JSONPLACEHOLDER
// ========================================

async function getJsonPostsByUser(userId) {
  try {
    const response = await axios.get(`${JSON_URL}/posts`, {
      params: {
        userId: userId,
      },
    });

    console.log("Posts:", response.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getJsonPostsByUser(1);

// ========================================
// 20. GET COMMENTS FOR A POST
// JSONPLACEHOLDER
// ========================================

async function getCommentsByPost(postId) {
  try {
    const response = await axios.get(`${JSON_URL}/posts/${postId}/comments`);

    console.log("Comments:", response.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getCommentsByPost(1);

// ========================================
// 21. GET ALBUM PHOTOS
// JSONPLACEHOLDER
// ========================================

async function getAlbumPhotos(albumId) {
  try {
    const response = await axios.get(`${JSON_URL}/albums/${albumId}/photos`);

    console.log("Photos:", response.data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getAlbumPhotos(1);

// ========================================
// 22. GET USERS WITH ADDRESS DATA
// JSONPLACEHOLDER
// ========================================

async function getJsonUsers() {
  try {
    const response = await axios.get(`${JSON_URL}/users`);

    response.data.forEach((user) => {
      console.log("Name:", user.name);
      console.log("Email:", user.email);
      console.log("City:", user.address.city);
      console.log("Company:", user.company.name);
      console.log("----------------------------");
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// getJsonUsers();
