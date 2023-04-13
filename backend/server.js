import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vinayaka999",
  database: "anitrack",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/anime", (req, res) => {
  const q = "SELECT * FROM anime";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/anime", (req, res) => {
  const q = "INSERT INTO anime(`title`, `desc`, `rating`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.rating,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/anime/:id", (req, res) => {
  const animeId = req.params.id;
  const q = " DELETE FROM anime WHERE id = ? ";

  db.query(q, [animeId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/anime/:id", (req, res) => {
  const animeId = req.params.id;
  const q =
    "UPDATE anime SET `title`= ?, `desc`= ?, `rating`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.rating,
    req.body.cover,
  ];

  db.query(q, [...values, animeId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
