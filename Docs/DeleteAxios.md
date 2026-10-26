```javascript
const axios = require("axios");

// ========================================
// AXIOS DELETE API PRACTICE
// ========================================

const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// REUSABLE DELETE FUNCTION
// ========================================

async function deleteData(url, config = {}) {
    try {
        const response = await axios.delete(url, config);

        console.log("Status:", response.status);
        console.log("Response:", response.data);

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
// 1. DELETE A PRODUCT
// ========================================

async function deleteProduct(id) {
    const data = await deleteData(
        `${DUMMY_URL}/products/${id}`
    );

    if (data) {
        console.log("Product ID:", data.id);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 2. DELETE A USER
// ========================================

async function deleteUser(id) {
    const data = await deleteData(
        `${DUMMY_URL}/users/${id}`
    );

    if (data) {
        console.log("User ID:", data.id);
        console.log("Name:", data.firstName);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 3. DELETE A POST
// JSONPlaceholder
// ========================================

async function deletePost(id) {
    const data = await deleteData(
        `${JSON_URL}/posts/${id}`
    );

    if (data) {
        console.log("Response:", data);
    }
}


// ========================================
// 4. DELETE A TODO
// ========================================

async function deleteTodo(id) {
    const data = await deleteData(
        `${DUMMY_URL}/todos/${id}`
    );

    if (data) {
        console.log("Todo ID:", data.id);
        console.log("Task:", data.todo);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 5. DELETE A COMMENT
// ========================================

async function deleteComment(id) {
    const data = await deleteData(
        `${DUMMY_URL}/comments/${id}`
    );

    if (data) {
        console.log("Comment ID:", data.id);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 6. DELETE A CART
// ========================================

async function deleteCart(id) {
    const data = await deleteData(
        `${DUMMY_URL}/carts/${id}`
    );

    if (data) {
        console.log("Cart ID:", data.id);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 7. DELETE A RECIPE
// ========================================

async function deleteRecipe(id) {
    const data = await deleteData(
        `${DUMMY_URL}/recipes/${id}`
    );

    if (data) {
        console.log("Recipe ID:", data.id);
        console.log("Name:", data.name);
        console.log("Deleted:", data.isDeleted);
    }
}


// ========================================
// 8. DELETE WITH QUERY PARAMETERS
// ========================================

async function deletePostWithParams(id) {
    const data = await deleteData(
        `${JSON_URL}/posts/${id}`,
        {
            params: {
                source: "practice"
            }
        }
    );

    if (data) {
        console.log("Deleted post:", data);
    }
}


// ========================================
// 9. DELETE WITH CUSTOM HEADERS
// ========================================

async function deletePostWithHeaders(id) {
    const data = await deleteData(
        `${JSON_URL}/posts/${id}`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    if (data) {
        console.log("Delete response:", data);
    }
}


// ========================================
// 10. DELETE A RESOURCE USING A GENERIC ID
// ========================================

async function deleteResource(resource, id) {
    const allowedResources = [
        "posts",
        "comments",
        "albums",
        "photos",
        "todos",
        "users"
    ];

    if (!allowedResources.includes(resource)) {
        console.log("Invalid resource");
        return;
    }

    const data = await deleteData(
        `${JSON_URL}/${resource}/${id}`
    );

    if (data !== null) {
        console.log(`${resource} delete request completed`);
        console.log("Response:", data);
    }
}


// ========================================
// CALL ONE FUNCTION AT A TIME
// Uncomment only ONE line to practice.
// ========================================

// deleteProduct(1);
// deleteUser(1);
// deletePost(1);
// deleteTodo(1);
// deleteComment(1);
// deleteCart(1);
// deleteRecipe(1);
// deletePostWithParams(1);
// deletePostWithHeaders(1);
// deleteResource("posts", 1);
```