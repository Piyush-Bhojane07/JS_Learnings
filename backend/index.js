const express = require("express");

const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

/*
express: the web framework.

cors: lets browsers from other origins (e.g., your React app on :5173) call this API.

morgan: request logger (shows method, path, status, response time).

axios: for calling external APIs.

app: your Express application instance.

PORT: server port (uses env var if provided, else 3000).

*/

//global middleware
app.use(cors());
app.use(express());
app.use(morgan("dev"));

const users = [
  { id: 1, name: "Piyush", role: "admin" },
  { id: 2, name: "Sarthak", role: "user" },
  { id: 3, name: "kunal", role: "user" },
  { id: 4, name: "harkirat", role: "user" },
  { id: 5, name: "hitesh", role: "user" },
  { id: 1, name: "Piyush", role: "admin" },
  { id: 2, name: "Sarthak", role: "user" },
  { id: 3, name: "kunal", role: "user" },
  { id: 4, name: "harkirat", role: "user" },
  { id: 5, name: "hitesh", role: "user" },
];

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    endpoints: [
      "/health",
      "/hello?name=YourName",
      "/info?name=YourName",
      "/infoo/:id",
      "/users",
      "/users?role=user&q=sa&page=1&limit=2&sortBy=name&order=asc",
      "/todo/1",
    ],
  });
});
/*
: It’s not dangerous locally, but in production you should not show this.
Better to serve a "Welcome" message or redirect to your API docs (Swagger, Postman).

*/
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/hospital", (req, res) => res.json({ status: "ok" }));
app.get("/fitness", (req, res) => res.json({ status: "ok" }));

app.get("/hello", (req, res) => {
  const name = req.query.name || "piyush";
  res.json({ message: `hello, ${name}` });
});

app.get("/info", (req, res) => {
  const namee = req.query.name || "sarthak";
  res.json({ message: `info of -> ${namee}` });
});

app.get("/infoo/:id", (req, res) => {
  const id = Number(req.params.id);
  const userr = users.find((pt) => pt.id === id);
  // console.log(user)
  res.json(userr);
});

app.get("/users", (req, res) => {
  // app: the Express application instance (created earlier via express()).
  // .get: method to register a handler for HTTP GET requests.
  // "/users": the route path this handler responds to.
  // (req, res) => { ... }: route handler function; req = incoming request, res = outgoing response.
  let {
    q,
    role,
    page = 1,
    limit = 10,
    sortBy = "id",
    order = "asc",
  } = req.query;

  // let { ... } = req.query;
  // req.query: object containing query string parameters from the URL (all values are strings).
  // q: search term (e.g., /users?q=sa).
  // role: filter value (e.g., /users?role=user).
  // page = 1: default page number if not provided in query.
  // limit = 10: default items per page if not provided.
  // sortBy = "id": default field to sort by.
  // order = "asc": default sort order ("asc" or "desc").

  page = Number(page);
  // Number(page): converts the page value (string) to a Number.
  // If page is "2" -> 2. If invalid -> NaN (you may want to validate after conversion).

  limit = Number(limit);
  // Number(limit): converts the limit value (string) to a Number.
  // Important to validate (e.g., ensure limit > 0 and reasonable upper bound).

  let result = [...users];
  // [...users]: creates a shallow copy of the users array so original users isn't mutated.
  // result: working array that we will search/filter/sort/paginate.

  //search by names
  if (q) {
    const needle = q.toLowerCase();
    // q.toLowerCase(): normalize search term for case-insensitive match.
    // needle: lowered search string we will look for inside names.

    result = result.filter((u) => u.name.toLowerCase().includes(needle));
    // result.filter(...): returns a new array with users that match the condition.
    // (u) => ... : arrow function; u is each user object.
    // u.name.toLowerCase(): normalize the user's name for case-insensitive comparing.
    // .includes(needle): returns true if needle is substring of the name.
    // This implements a case-insensitive "contains" search on name.
  }

  //filter
  if (role) result = result.filter((u) => u.role === role);
  // if (role): only apply filter when user passed ?role=...
  // u.role === role: strict equality (case-sensitive). Consider normalizing if you want case-insensitive roles.
  // After this line, result contains only users matching the role (if provided).

  //sort by any fieild that exists
  //sort by any fieild that exists
  result.sort((a, b) => {
    const dir = order === "desc" ? -1 : 1;
    if (a[sortBy] < b[sortBy]) return -1 * dir;
    if (a[sortBy] > b[sortBy]) return -1 * dir;
    return 0;
  });
  // result.sort(...): sorts the array in place using the comparator function.
  // (a, b): two items to compare.
  // dir: multiplier -1 for descending, +1 for ascending.
  // BUG: second comparison should return 1 * dir when a > b — returning -1 * dir again is wrong.
  // Correct comparator should be:
  // if (a[sortBy] < b[sortBy]) return -1 * dir;
  // if (a[sortBy] > b[sortBy]) return  1 * dir;
  // return 0;
  //
  // Notes:
  // - If a[sortBy] or b[sortBy] is undefined, the comparison may be inconsistent.
  // - For strings prefer localeCompare: a[sortBy].localeCompare(b[sortBy]) * dir
  // - Ensure sortBy is an allowed field (to avoid sorting by arbitrary user-supplied keys).

  const total = result.length;
  // total: the number of items after search+filter, BEFORE pagination.
  // Useful to return so clients know how many total results exist.

  const start = (page - 1) * limit;
  // start: index of the first item for the requested page (0-based).
  // Example: page=1 -> start=0, page=2 -> start=limit, etc.

  const data = result.slice(start, start + limit);
  // result.slice(start, end): returns a shallow copy of the selected portion.
  // start: inclusive index. end: exclusive index.
  // This returns at most `limit` items for the requested page.
  // If start is out of range slice returns [].

  res.json({ page, limit, total, data });
  // res.json(...): sends a JSON response with HTTP status 200.
  // { page, limit, total, data }: shorthand object notation (same as { page: page, limit: limit, ... }).
  // This is the API response shape: pagination metadata + the data array.


    /*
    Example requests:
    - /users                     -> page 1, limit 10, all users
    - /users?role=user            -> filter role=user
    - /users?q=sa                 -> search 'sa' in name
    - /users?sortBy=name&order=asc-> sort by name ascending
    - /users?page=2&limit=2       -> pagination
  */
  // These comments are examples of how to call and combine query parameters.

    // res.json(users)
  // (optional) you might previously have simply returned the raw users array.
  // Now we return filtered/sorted/paginated `data` with metadata instead.
  
  /*

  /users → all users
/users?role=user → only users with role user
/users?q=sa → search “sa” in names
/users?sortBy=name&order=asc
/users?page=1&limit=2

*/
  // res.json(users)
});

app.listen(PORT, () => {
  console.log(`server running at Http: //localhost:${PORT}`);
});

/*
const express = require("express")
const app = express()
const PORT = process.evn.PORT || 3000


app.get("", (req, res) => {
    res.json({status : "ok"})
})

app.listen(PORT, () => {
        clg(`server start at port http://localhost:${port}/endpoints`)
    })
*/
