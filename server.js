import express, { static } from "express";
import { join } from "path";
const app = express();
app.use(static(join(__dirname, "build")));
app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
