import React from 'react';

const Header = ({ course }) => {
  return (
    <div>
      <h1>
      {course}
      </h1>
    </div>
  )
}

const Part = ({ part }) => {
  const parts = part

  return (
    <div>
     {parts.map(part1 => 
      <p key={part1.id}>
        {part1.name} {part1.exercises}
      </p>
      )}
    </div>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course} />
    </div>
  )
}

const Total = ({ course }) => {
  const total = course.reduce( (s, p) => s + p.exercises, 0)

  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  const courses = course

  return ( 
  <div>
    {courses.map(course1 =>
      <div key={course1.id}>
        <Header course={course1.name} />
        <Content course={course1.parts} />
        <Total course={course1.parts} />
      </div>
      )}
  </div>
  )
}

export default Course