import React from 'react'

const Course = ({ course }) => {
  return (
    <>
      {course.map(stack =>
      <div key={stack.id}>
        <h1>
          {stack.name}
        </h1>
          {stack.parts.map(part => (
            <p key={part.id}>{part.name} {part.exercises}</p>
          ))}
          <p><b>Total of exercises: {stack.totalExercises}</b></p>
      </div>
      )}
    </>
  )
}

export default Course