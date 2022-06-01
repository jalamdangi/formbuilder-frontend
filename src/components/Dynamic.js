import React, { useState } from 'react'

const Dynamic = () => {
  const [question, setQuestion] = useState([])

  const answerType = () => {
    alert('invoked')
  }

  return (
    <div className="container">
      <div className="row bg-light p-2">
        <div className="col-md-12">
          <input
            onChange={(e) => setQuestion(...question, e.target.value)}
            type="text"
            placeholder="Write Your Question"
            id="form-add-question-field"
          />
          <input
            type="text"
            placeholder="Choose answer type"
            id="form-add-answer-field"
          />
        </div>
      </div>
    </div>
  )
}

export default Dynamic
