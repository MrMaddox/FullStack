import React from 'react';
import ReactDOM from 'react-dom';

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
  //const parts;

    const total = course.reduce( (s, p) => s + p.exercises, 0)
    console.log(total)
  
  //
  //

  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  )
}

const Course = ({ course }) => {

  return ( 
  <div>
    <Header course={course.name} />
    <Content course={course.parts} />
    <Total course={course.parts} />
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Paras kurssi',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
