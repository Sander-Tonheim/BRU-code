// importerer pakker.
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

const { isAuthenticated } = require("./middleware/authMiddleware");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/registrer", (req, res) => {
	res.render("registrerUser");
});

app.post("/registrer", async (req, res) => {
	const input = req.body;
	res.redirect("/registrer");
});

app.get("/innlogging", (req, res) => {
	res.render("signin");
});

app.post("/innlogging", async (req, res) => {
	const userData = req.body;
	if (userData.email !== "test@test.no" || userData.password !== "Kappa123") {
		return res.redirect("/innlogging");
	}
	return res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
	res.render("dashboard");
});

app.get("/about", (req, res) => {
	res.send("about");
});

app.get("/quote", (req, res) => {
	res.render("quote");
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
