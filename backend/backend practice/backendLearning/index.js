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
  let {
    q,
    role,
    page = 1,
    limit = 10,
    sortBy = "id",
    order = "asc",
  } = req.query;

  page = Number(page);
  limit = Number(limit);

  let result = [...users];

  //search by names
  if (q) {
    const needle = q.toLowerCase();
    result = result.filter((u) => u.name.toLowerCase().includes(needle));
  }

  //filter
  if (role) result = result.filter((u) => u.role === role);

  //sort by any fieild that exists
  result.sort((a, b) => {
    const dir = order === "desc" ? -1 : 1;
    if (a[sortBy] < b[sortBy]) return -1 * dir;
    if (a[sortBy] > b[sortBy]) return -1 * dir;
    return 0;
  });

  const total = result.length;
  const start = (page - 1) * limit;
  const data = result.slice(start, start + limit);

  res.json({ page, limit, total, data });

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
