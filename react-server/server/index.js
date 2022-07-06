import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Menu from "../src/Menu";
import fs from "fs";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static("./build"));

app.get((req, res) => {
  const menuApp = ReactDOMServer.renderToString(<Menu />);
  const indexFile = path.resolve("./build.index.html");
  fs.readFile(indexFile, "utf8", (err, data) =>
    res.send(
      data.replace(`<div id="root"></div>`, `<div id="root">${menuApp}</div>`)
    )
  );
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
