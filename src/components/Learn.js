import React, { useState } from 'react'

const Learn = () => {
  const userTemplate = { name: '', type: '' }
  const [users, setUsers] = useState([userTemplate])
  const addanother = () => {
    console.log(users)
    setUsers([...users, userTemplate])
  }
  const onChange = (e, index) => {
    const updatedUsers = users.map((user, i) =>
      index == i ? 
        Object.assign(user, { [e.target.name]: e.target.value, type:e.target.type }) : user)
    setUsers(updatedUsers);
  }
  return (
    <div>
      <h4>This is learn component</h4>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <div className="container">
              <input
                type="text"
                name="name"
                placeholder={index}
                className="w-50 p-2 mb-2"
                onChange={(e) => onChange(e, index)}
              />
            </div>
          </div>
        )
      })}
      <button onClick={() => addanother()} className="btn btn-success plus">
        +
      </button>
    </div>
  )
}

export default Learn
