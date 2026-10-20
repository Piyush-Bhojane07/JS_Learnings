```javascript
const axios = require("axios");

// ========================================
// AXIOS POST API PRACTICE
// ========================================

const DUMMY_URL = "https://dummyjson.com";
const JSON_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// REUSABLE POST FUNCTION
// ========================================

async function postData(url, body = {}, config = {}) {
    try {
        const response = await axios.post(url, body, config);

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
// 1. CREATE A PRODUCT
// Body: Flat object
// ========================================

async function createProduct() {
    const product = {
        title: "Wireless Headphones",
        price: 1999,
        description: "Bluetooth headphones",
        category: "electronics"
    };

    const data = await postData(
        `${DUMMY_URL}/products/add`,
        product
    );

    if (data) {
        console.log("Product ID:", data.id);
        console.log("Product Name:", data.title);
    }
}


// ========================================
// 2. CREATE A USER
// Body: User details
// ========================================

async function createUser() {
    const user = {
        firstName: "Piyush",
        lastName: "Sharma",
        age: 26,
        email: "piyush@example.com"
    };

    const data = await postData(
        `${DUMMY_URL}/users/add`,
        user
    );

    if (data) {
        console.log("User ID:", data.id);
        console.log("Name:", data.firstName);
    }
}


// ========================================
// 3. CREATE A POST
// JSONPlaceholder
// Body: title, body, userId
// ========================================

async function createPost() {
    const post = {
        title: "Learning React Native",
        body: "Practicing Axios POST requests",
        userId: 1
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        post
    );

    if (data) {
        console.log("Post ID:", data.id);
        console.log("Title:", data.title);
    }
}


// ========================================
// 4. LOGIN REQUEST
// Body: Email and password
// Mock API returns a token
// ========================================

async function loginUser() {
    const credentials = {
        username: "emilys",
        password: "emilyspass"
    };

    const data = await postData(
        `${DUMMY_URL}/auth/login`,
        credentials
    );

    if (data) {
        console.log("Username:", data.username);
        console.log("Access Token:", data.accessToken);
    }
}


// ========================================
// 5. SEARCH WITH POST BODY
// DummyJSON product search is GET-based.
// This example demonstrates a POST search
// using JSONPlaceholder as a mock endpoint.
// ========================================

async function createSearchRecord() {
    const search = {
        query: "mobile phone",
        category: "electronics",
        page: 1
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        search
    );

    if (data) {
        console.log("Created search record:", data);
    }
}


// ========================================
// 6. SEND NESTED OBJECT
// Body: Address and user details
// ========================================

async function createUserWithAddress() {
    const user = {
        name: "Piyush",
        email: "piyush@example.com",
        address: {
            street: "MG Road",
            city: "Pune",
            state: "Maharashtra",
            pinCode: "411001"
        }
    };

    const data = await postData(
        `${JSON_URL}/users`,
        user
    );

    if (data) {
        console.log("Name:", data.name);
        console.log("City:", data.address.city);
    }
}


// ========================================
// 7. SEND AN ARRAY IN THE BODY
// Body: Cart items
// ========================================

async function createCartRecord() {
    const cart = {
        userId: 1,
        products: [
            {
                id: 1,
                quantity: 2
            },
            {
                id: 2,
                quantity: 1
            }
        ]
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        cart
    );

    if (data) {
        console.log("Cart record:", data);
        console.log("First product:", data.products[0]);
    }
}


// ========================================
// 8. SEND FORM-LIKE DATA AS JSON
// Body: Registration information
// ========================================

async function registerUser() {
    const registration = {
        name: "Piyush",
        email: "piyush@example.com",
        password: "ExamplePassword123",
        confirmPassword: "ExamplePassword123"
    };

    if (
        registration.password !==
        registration.confirmPassword
    ) {
        console.log("Passwords do not match");
        return;
    }

    const data = await postData(
        `${JSON_URL}/users`,
        registration
    );

    if (data) {
        console.log("Registration response:", data);
    }
}


// ========================================
// 9. SEND CUSTOM HEADERS
// Body: Feedback
// ========================================

async function submitFeedback() {
    const feedback = {
        rating: 5,
        message: "The application is easy to use",
        userId: 1
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        feedback,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    if (data) {
        console.log("Feedback submitted:", data);
    }
}


// ========================================
// 10. SEND AN EMPTY BODY
// Body: No fields
// ========================================

async function createEmptyRecord() {
    const data = await postData(
        `${JSON_URL}/posts`,
        {}
    );

    if (data) {
        console.log("Response:", data);
    }
}


// ========================================
// 11. CREATE A TODO
// Body: Task details
// ========================================

async function createTodo() {
    const todo = {
        todo: "Practice Axios POST",
        completed: false,
        userId: 1
    };

    const data = await postData(
        `${DUMMY_URL}/todos/add`,
        todo
    );

    if (data) {
        console.log("Todo ID:", data.id);
        console.log("Task:", data.todo);
        console.log("Completed:", data.completed);
    }
}


// ========================================
// 12. CREATE A COMMENT
// Body: Comment details
// ========================================

async function createComment() {
    const comment = {
        body: "This is a practice comment",
        postId: 1,
        userId: 1
    };

    const data = await postData(
        `${DUMMY_URL}/comments/add`,
        comment
    );

    if (data) {
        console.log("Comment ID:", data.id);
        console.log("Comment:", data.body);
    }
}


// ========================================
// 13. SEND MULTIPLE OBJECTS IN AN ARRAY
// Body: Order items
// ========================================

async function createOrderRecord() {
    const order = {
        customerId: 101,
        items: [
            {
                productId: 1,
                name: "Keyboard",
                quantity: 1,
                price: 999
            },
            {
                productId: 2,
                name: "Mouse",
                quantity: 2,
                price: 499
            }
        ],
        paymentMethod: "UPI"
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        order
    );

    if (data) {
        console.log("Order:", data);
        console.log("First item:", data.items[0].name);
    }
}


// ========================================
// 14. SEND QUERY-LIKE FILTER DATA
// Body: Filter settings
// ========================================

async function createFilterRecord() {
    const filters = {
        category: "electronics",
        minPrice: 500,
        maxPrice: 5000,
        inStock: true,
        sortBy: "price"
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        filters
    );

    if (data) {
        console.log("Filter record:", data);
    }
}


// ========================================
// 15. SEND BOOLEAN AND NULL VALUES
// Body: Different JavaScript data types
// ========================================

async function createSettingsRecord() {
    const settings = {
        username: "piyush",
        notificationsEnabled: true,
        theme: "dark",
        profileImage: null,
        age: 26
    };

    const data = await postData(
        `${JSON_URL}/posts`,
        settings
    );

    if (data) {
        console.log("Settings:", data);
    }
}


// ========================================
// CALL ONE FUNCTION AT A TIME
// Uncomment only ONE line to practice.
// ========================================

// createProduct();
// createUser();
// createPost();
// loginUser();
// createSearchRecord();
// createUserWithAddress();
// createCartRecord();
// registerUser();
// submitFeedback();
// createEmptyRecord();
// createTodo();
// createComment();
// createOrderRecord();
// createFilterRecord();
// createSettingsRecord();
```