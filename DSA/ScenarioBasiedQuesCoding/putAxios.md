```javascript
const axios = require("axios");

// ========================================
// AXIOS PUT API PRACTICE
// ========================================

const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// REUSABLE PUT FUNCTION
// ========================================

async function putData(url, body = {}, config = {}) {
    try {
        const response = await axios.put(url, body, config);

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
// 1. UPDATE PRODUCT
// Flat object
// ========================================

async function updateProduct(id) {
    const product = {
        title: "Updated Headphones",
        price: 2499,
        description: "Updated product description"
    };

    const data = await putData(
        `${DUMMY_URL}/products/${id}`,
        product
    );

    if (data) {
        console.log("ID:", data.id);
        console.log("Title:", data.title);
        console.log("Price:", data.price);
    }
}


// ========================================
// 2. UPDATE USER
// ========================================

async function updateUser(id) {
    const user = {
        firstName: "Piyush",
        lastName: "Sharma",
        age: 27,
        email: "piyush@example.com"
    };

    const data = await putData(
        `${DUMMY_URL}/users/${id}`,
        user
    );

    if (data) {
        console.log("Name:", data.firstName);
        console.log("Email:", data.email);
    }
}


// ========================================
// 3. UPDATE POST
// JSONPlaceholder
// ========================================

async function updatePost(id) {
    const post = {
        id: id,
        title: "Updated React Native Guide",
        body: "Learning Axios PUT requests",
        userId: 1
    };

    const data = await putData(
        `${JSON_URL}/posts/${id}`,
        post
    );

    if (data) {
        console.log("Title:", data.title);
        console.log("Body:", data.body);
    }
}


// ========================================
// 4. UPDATE USER ADDRESS
// Nested object
// ========================================

async function updateUserAddress(id) {
    const user = {
        firstName: "Piyush",
        address: {
            street: "MG Road",
            city: "Pune",
            state: "Maharashtra",
            pinCode: "411001"
        }
    };

    const data = await putData(
        `${JSON_URL}/users/${id}`,
        user
    );

    if (data) {
        console.log("User:", data.name);
        console.log("Address:", data.address);
    }
}


// ========================================
// 5. UPDATE CART
// Array inside an object
// ========================================

async function updateCart(id) {
    const cart = {
        userId: 1,
        products: [
            {
                id: 1,
                quantity: 3
            },
            {
                id: 2,
                quantity: 2
            }
        ]
    };

    const data = await putData(
        `${DUMMY_URL}/carts/${id}`,
        cart
    );

    if (data) {
        console.log("Cart ID:", data.id);
        console.log("Products:", data.products);
    }
}


// ========================================
// 6. UPDATE TODO
// ========================================

async function updateTodo(id) {
    const todo = {
        todo: "Complete Axios practice",
        completed: true,
        userId: 1
    };

    const data = await putData(
        `${DUMMY_URL}/todos/${id}`,
        todo
    );

    if (data) {
        console.log("Task:", data.todo);
        console.log("Completed:", data.completed);
    }
}


// ========================================
// 7. UPDATE COMMENT
// ========================================

async function updateComment(id) {
    const comment = {
        body: "Updated comment",
        postId: 1,
        userId: 1
    };

    const data = await putData(
        `${DUMMY_URL}/comments/${id}`,
        comment
    );

    if (data) {
        console.log("Comment:", data.body);
    }
}


// ========================================
// 8. UPDATE RECIPE
// Array fields
// ========================================

async function updateRecipe(id) {
    const recipe = {
        name: "Updated Pasta",
        ingredients: [
            "Pasta",
            "Tomato",
            "Cheese"
        ],
        instructions: [
            "Boil pasta",
            "Add sauce",
            "Serve hot"
        ]
    };

    const data = await putData(
        `${DUMMY_URL}/recipes/${id}`,
        recipe
    );

    if (data) {
        console.log("Recipe:", data.name);
        console.log("Ingredients:", data.ingredients);
    }
}


// ========================================
// 9. UPDATE SETTINGS
// Boolean and null values
// ========================================

async function updateSettings(id) {
    const settings = {
        username: "piyush",
        darkMode: true,
        notificationsEnabled: false,
        profileImage: null
    };

    const data = await putData(
        `${JSON_URL}/posts/${id}`,
        settings
    );

    if (data) {
        console.log("Settings:", data);
    }
}


// ========================================
// 10. UPDATE WITH QUERY PARAMETERS
// ========================================

async function updateProductWithParams(id) {
    const product = {
        title: "Updated Product",
        price: 999
    };

    const data = await putData(
        `${DUMMY_URL}/products/${id}`,
        product,
        {
            params: {
                source: "practice",
                version: 1
            }
        }
    );

    if (data) {
        console.log("Updated:", data);
    }
}


// ========================================
// 11. UPDATE WITH CUSTOM HEADERS
// ========================================

async function updatePostWithHeaders(id) {
    const post = {
        title: "Updated post with headers",
        body: "Practicing custom Axios headers",
        userId: 1
    };

    const data = await putData(
        `${JSON_URL}/posts/${id}`,
        post,
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
// CALL ONE FUNCTION AT A TIME
// ========================================

// updateProduct(1);
// updateUser(1);
// updatePost(1);
// updateUserAddress(1);
// updateCart(1);
// updateTodo(1);
// updateComment(1);
// updateRecipe(1);
// updateSettings(1);
// updateProductWithParams(1);
// updatePostWithHeaders(1);
```
