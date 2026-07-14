import React from "react";

function CourseDetails(props) {
  let courseContent;

  if (props.courses.length > 0) {
    courseContent = props.courses.map((course) => (
      <div className="detail-item" key={course.id}>
        <h3>{course.name}</h3>

        <p className="course-date">
          {course.date}
        </p>
      </div>
    ));
  } else {
    courseContent = (
      <p>No courses available</p>
    );
  }

  return (
    <section className="details-section course-section">
      <p className="section-number">03</p>
      <h2>Course Details</h2>
      <div className="title-line"></div>

      {courseContent}
    </section>
  );
}

export default CourseDetails;