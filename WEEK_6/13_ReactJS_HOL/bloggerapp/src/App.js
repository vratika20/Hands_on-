import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import "./App.css";

function App() {
  const books = [
    {
      id: 101,
      bname: "Master React",
      price: 670
    },
    {
      id: 102,
      bname: "Deep Dive into Angular 11",
      price: 800
    },
    {
      id: 103,
      bname: "Mongo Essentials",
      price: 450
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schweidnzier",
      description: "You can install React from npm."
    }
  ];

  const courses = [
    {
      id: 1,
      name: "Angular",
      date: "4/5/2021"
    },
    {
      id: 2,
      name: "React",
      date: "6/3/2021"
    }
  ];

  const showBlogs = true;

  return (
    <div className="app">
      <header className="blog-header">
        <p className="header-label">DEVELOPER LIBRARY</p>

        <h1>Learning Journal</h1>

        <p className="header-description">
          Books, courses and notes from the world of development.
        </p>
      </header>

      <main className="details-container">
        <CourseDetails courses={courses} />

        <BookDetails books={books} />

        <BlogDetails
          blogs={blogs}
          showBlogs={showBlogs}
        />
      </main>

      <footer className="footer">
        <p>React Conditional Rendering Exercise</p>
      </footer>
    </div>
  );
}

export default App;
