const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Course = require("./models/Course");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));


// connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// home page
app.get("/", (req, res) => {
  res.render("home");
});

// show add course page
app.get("/add-course", (req, res) => {
  res.render("courses/add");
});

// save course
app.post("/add-course", async (req, res) => {
  try {
    const { name, code, credits } = req.body;
    await Course.create({ name, code, credits });
    res.redirect("/courses");
  } catch (err) {
    res.send("Error saving course");
  }
});

// list all courses
app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.render("courses/list", { courses });
});

// delete course
app.delete("/delete-course/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.redirect("/courses");
  } catch (err) {
    res.send("Error deleting course");
  }
});

// show edit course page
app.get("/edit-course/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.render("courses/edit", { course });
  } catch (err) {
    res.send("Error loading edit page");
  }
});

// update course
app.put("/edit-course/:id", async (req, res) => {
  try {
    const { name, code, credits } = req.body;

    await Course.findByIdAndUpdate(req.params.id, {
      name,
      code,
      credits
    });

    res.redirect("/courses");
  } catch (err) {
    res.send("Error updating course");
  }
});

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
