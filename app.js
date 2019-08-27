const express = require("express");
const redis = require("redis");
const uuidv4 = require("uuid/v4");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(
  REDIS_PORT,
  process.env.NODE_ENV === "production" ? "redis" : "localhost"
);

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const { url } = req.body;

  if (
    !url.match(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    )
  ) {
    res.status(400).send("URL not looking like an URL :(");
  }

  const shortUrl = uuidv4();

  client.set(shortUrl, url, (err, reply) => {
    if (reply === "OK") {
      res.send(shortUrl);
    }
  });
});

app.get("/:shortUrl", (req, res) => {
  const { shortUrl } = req.params;

  client.get(shortUrl, (err, longUrl) => {
    if (err) throw err;

    if (longUrl) {
      res.redirect(longUrl);
    } else {
      res.status(404).send("URL not found :(");
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
