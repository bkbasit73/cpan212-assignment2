# CPAN-212 – Assignment 2  
## Institute Course Management System

### Student Information
- **Name:** Abdul Basit  
- **Student ID:** n01381962  
- **Course:** CPAN-212 – Modern Web Technologies  
- **Instructor:** Sivagama Srinivasan  
- **Assignment Weight:** 10%

---

## Project Overview
This is a web-based Course Management System developed using Node.js, Express, MongoDB, and EJS.  
The system allows users to:

- Add new courses  
- View existing courses  
- Update course details  
- Delete any course  

It demonstrates full CRUD functionality and communication with MongoDB Atlas.

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend JavaScript runtime |
| Express.js | Server and routing framework |
| MongoDB Atlas | Cloud NoSQL database |
| Mongoose | MongoDB schema and queries |
| EJS | Templates for dynamic UI |
| CSS | Styling the user interface |

---

## Features Implemented

| Feature | Status |
|---------|--------|
| Express App Setup | Completed |
| Mongoose Database Connection | Completed |
| Course Schema & Model | Completed |
| Add Course | Completed |
| View Courses | Completed |
| Edit/Update Course | Completed |
| Delete Course | Completed |
| UI Built with EJS Templates | Completed |
| Data Stored in MongoDB Atlas | Completed |

---

## Folder Structure

```
cpan212-assignment2
│── models
│   └── Course.js
│── public
│   └── style.css
│── views
│   ├── home.ejs
│   └── courses
│       ├── add.ejs
│       ├── list.ejs
│       └── edit.ejs
│── .env
│── package.json
│── server.js
```

---

## How to Run the Project

### 1. Install Dependencies
```
npm install
```

### 2. Add MongoDB Connection String  
Create a file named `.env`:
```
MONGODB_URI= your-mongodb-atlas-connection-string
```

### 3. Start the Server
```
node server.js
```
or (if nodemon is installed)
```
nodemon server.js
```

### 4. Open in Browser
```
http://localhost:3000
```

---

## Endpoints

| Route | Description |
|-------|-------------|
| GET / | Home Page |
| GET /courses | View All Courses |
| GET /add-course | Form to Add a Course |
| POST /add-course | Insert New Course |
| GET /edit-course/:id | Edit Course Form |
| POST /update-course/:id | Update Course |
| DELETE /delete-course/:id | Delete Course |

---

## Submission Includes
- Full source code (zipped)
- Screenshots of Add, View, Update, Delete
- MongoDB Atlas collection documents

