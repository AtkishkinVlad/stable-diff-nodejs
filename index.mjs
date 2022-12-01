import express from "express";

import { generateImage } from "./generateImage.mjs";

const app = express();
const port = 3000

app.get('/model', async (req, res) => {
  const text = req.query;
  return res.send(await generateImage(text.text));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
