```javascript
const axios = require("axios");

// ========================================
// AXIOS PATCH API PRACTICE
// ========================================

const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// REUSABLE PATCH FUNCTION
// ========================================

async function patchData(url, body = {}, config = {}) {
    try {
        const response = await axios.patch(url, body, config);

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
// 1. UPDATE ONLY PRODUCT PRICE
// Partial update
// ========================================

async function updateProductPrice(id) {
    const body = {
        price: 1499
    };

    const data = await patchData(
        `${DUMMY_URL}/products/${id}`,
        body
    );

    if (data) {
        console.log("Product:", data.title);
        console.log("Updated price:", data.price);
    }
}


// ========================================
// 2. UPDATE ONLY PRODUCT TITLE
// ========================================

async function updateProductTitle(id) {
    const body = {
        title: "Updated Wireless Headphones"
    };

    const data = await patchData(
        `${DUMMY_URL}/products/${id}`,
        body
    );

    if (data) {
        console.log("Updated title:", data.title);
    }
}


// ========================================
// 3. UPDATE USER EMAIL
// ========================================

async function updateUserEmail(id) {
    const body = {
        email: "updated@example.com"
    };

    const data = await patchData(
        `${DUMMY_URL}/users/${id}`,
        body
    );

    if (data) {
        console.log("Name:", data.firstName);
        console.log("Email:", data.email);
    }
}


// ========================================
// 4. UPDATE USER PROFILE
// Multiple selected fields
// ========================================

async function updateUserProfile(id) {
    const body = {
        firstName: "Piyush",
        lastName: "Sharma",
        age: 27
    };

    const data = await patchData(
        `${DUMMY_URL}/users/${id}`,
        body
    );

    if (data) {
        console.log("Name:", data.firstName, data.lastName);
        console.log("Age:", data.age);
    }
}


// ========================================
// 5. UPDATE POST TITLE ONLY
// JSONPlaceholder
// ========================================

async function updatePostTitle(id) {
    const body = {
        title: "Updated JavaScript Practice"
    };

    const data = await patchData(
        `${JSON_URL}/posts/${id}`,
        body
    );

    if (data) {
        console.log("ID:", data.id);
        console.log("Title:", data.title);
    }
}


// ========================================
// 6. UPDATE POST BODY ONLY
// ========================================

async function updatePostBody(id) {
    const body = {
        body: "Learning Axios PATCH requests"
    };

    const data = await patchData(
        `${JSON_URL}/posts/${id}`,
        body
    );

    if (data) {
        console.log("Updated body:", data.body);
    }
}


// ========================================
// 7. MARK TODO AS COMPLETED
// Boolean field
// ========================================

async function completeTodo(id) {
    const body = {
        completed: true
    };

    const data = await patchData(
        `${DUMMY_URL}/todos/${id}`,
        body
    );

    if (data) {
        console.log("Task:", data.todo);
        console.log("Completed:", data.completed);
    }
}


// ========================================
// 8. UPDATE NESTED OBJECT
// ========================================

async function updateUserAddress(id) {
    const body = {
        address: {
            city: "Pune",
            state: "Maharashtra"
        }
    };

    const data = await patchData(
        `${JSON_URL}/users/${id}`,
        body
    );

    if (data) {
        console.log("User:", data.name);
        console.log("Address:", data.address);
    }
}


// ========================================
// 9. UPDATE ARRAY FIELD
// ========================================

async function updateRecipeIngredients(id) {
    const body = {
        ingredients: [
            "Pasta",
            "Tomato",
            "Cheese"
        ]
    };

    const data = await patchData(
        `${DUMMY_URL}/recipes/${id}`,
        body
    );

    if (data) {
        console.log("Recipe:", data.name);
        console.log("Ingredients:", data.ingredients);
    }
}


// ========================================
// 10. UPDATE CART QUANTITY
// ========================================

async function updateCartQuantity(id) {
    const body = {
        products: [
            {
                id: 1,
                quantity: 5
            }
        ]
    };

    const data = await patchData(
        `${DUMMY_URL}/carts/${id}`,
        body
    );

    if (data) {
        console.log("Cart ID:", data.id);
        console.log("Products:", data.products);
    }
}


// ========================================
// 11. UPDATE WITH QUERY PARAMETERS
// ========================================

async function updateProductWithParams(id) {
    const body = {
        price: 999
    };

    const data = await patchData(
        `${DUMMY_URL}/products/${id}`,
        body,
        {
            params: {
                source: "practice"
            }
        }
    );

    if (data) {
        console.log("Updated product:", data);
    }
}


// ========================================
// 12. UPDATE WITH CUSTOM HEADERS
// ========================================

async function updatePostWithHeaders(id) {
    const body = {
        title: "Updated using custom headers"
    };

    const data = await patchData(
        `${JSON_URL}/posts/${id}`,
        body,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    if (data) {
        console.log("Updated post:", data);
    }
}


// ========================================
// 13. UPDATE SETTINGS
// Boolean and null values
// ========================================

async function updateSettings(id) {
    const body = {
        darkMode: true,
        notificationsEnabled: false,
        profileImage: null
    };

    const data = await patchData(
        `${JSON_URL}/posts/${id}`,
        body
    );

    if (data) {
        console.log("Settings response:", data);
    }
}


// ========================================
// CALL ONE FUNCTION AT A TIME
// Uncomment ONE line to practice.
// ========================================


// updateProductPrice(1);
// updateProductTitle(1);
// updateUserEmail(1);
// updateUserProfile(1);
// updatePostTitle(1);
// updatePostBody(1);
// completeTodo(1);
// updateUserAddress(1);
// updateRecipeIngredients(1);
// updateCartQuantity(1);
// updateProductWithParams(1);
// updatePostWithHeaders(1);
// updateSettings(1);
```