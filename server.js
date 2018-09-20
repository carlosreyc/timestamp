const express = require("express");
const app = express();

app.get("/api/timestamp/:date_string?", (req, res) => {
  const dateString = new Number(req.params.date_string);
  let date;
  if (isNaN(dateString)) {
    date = new Date();
    res.send({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
  date = new Date(dateString);
  if (isNaN(date.getTime())) {
    res.send({ error: "Invalid Date" });
  }
  res.send({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
